import { Names } from 'aws-cdk-lib';
import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import { IListener } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

// type ConstructTree = {
//   [id in string]: IConstruct
// }

// export function inject(tree: Tree): Tree {
//   return tree
// }

// type Tree = {
//   [id in string]: (InterNode<ConstructTree> | IConstruct)
// }

// interface InterNode<C extends ConstructTree> {
// 	readonly children: (keyof C)[]
// 	readonly node: (children: C) => IConstruct
// }

// type A = {
// 	a: IBucket
// 	b: IRepository
// }

// const bucketNode: InterNode<A> = {
//   children: ['a', 'b'],
//   node: (children) => {
// 	children
// 	return new Bucket(children.a, 'id')
// 	}
// }


// inject({
//   a: bucketNode,
// });

interface ConstructMap {
	[id: string]: Construct
}

interface INode<C extends ConstructMap> {
	deps: (keyof C)[]
	injectable: (mp: C) => Construct
}

type Node<C extends ConstructMap> = INode<C> | Construct

const d: INode<{ a: IRepository }> = {
	deps: ['a'],
	injectable: (mp) => {
		return new Bucket(mp.a, 'id')
	}
}

const e: INode<{ d: IBucket }> = {
	deps: ['d'],
	injectable: (mp) => {
		return new Bucket(mp['d'], 'id')
	}
}

const l: INode<{ a: IRepository, f: IListener }> = {
	deps: ['a', 'f'],
	injectable: (mp) => {
		return new Bucket(mp['a'], 'id')
	}
}
interface Tree {
	[id: string]: Node<any>
}


function inject(tree: Tree): ConstructMap {
	const result: ConstructMap = {};
	let inodes: INode<ConstructMap>[] = [];
	for (const [id, node] of Object.entries(tree)) {
		if (Construct.isConstruct(node))
			result[id] = node
		else
			inodes.push(node)
	}
	let proceed = false;
	while (inodes.length) {
		let nextNodes: INode<ConstructMap>[] = []
		for (const node of inodes) {
		  let satisfied = true;
		  let subMap: ConstructMap = {}
		  for(const depId of node.deps) {
			if(depId in result)
			  subMap[depId] = result[depId]
			else {
			  satisfied = false;
			  break;
			}
		  }
		  if(satisfied) {
			const c = node.injectable(subMap)
			result[Names.uniqueId(c)] = c
			proceed = true;
		  } else {
			nextNodes.push(node);
		  }
		}
		inodes = nextNodes
		if (!proceed)
			throw new Error('The dependency structure is not a directed acyclic graph.')
		proceed = false;
	}
	return result;
}

const res = inject({
	//	a: c,
	b: d,
	k: e,
	e: l,
	f: { deps: ['x', 'b'], injectable: (mp) => new Bucket(mp['b'], 'id') }
});
res

