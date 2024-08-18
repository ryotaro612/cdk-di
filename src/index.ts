import { Names } from 'aws-cdk-lib';
import { Construct, IConstruct } from 'constructs';

export interface INode<C extends ConstructMap> {
	children: (keyof C)[]
	node: (scope: Construct, children: C) => Construct
}

interface ConstructMap {
	[id: string]: Construct
}

type Node<C extends ConstructMap> = INode<C> | IConstruct

export function inject(scope: Construct, ...nodes: Node<any>[]): ConstructMap {
	const result: ConstructMap = {};
	let inodes: INode<ConstructMap>[] = []
	for (const node of nodes) {
		if (Construct.isConstruct(node))
			result[Names.uniqueId(node)] = node
		else
			inodes.push(node)
	}
	let proceed = false;
	while (inodes.length) {
		let nextNodes: INode<ConstructMap>[] = []
		for (const inode of inodes) {
			let satisfied = true;
			let subMap: ConstructMap = {}
			for (const depId of inode.children) {
				if (depId in result)
					subMap[depId as string] = result[depId as string]
				else
					satisfied = false;
			}
			if (satisfied) {
				const c = inode.node(scope, subMap)
				result[Names.uniqueId(c)] = c
				proceed = true;
			} else {
				nextNodes.push(inode);
			}
		}
	  inodes = nextNodes
		if (!proceed)
			throw new Error('The dependency structure is not a directed acyclic graph.')
		proceed = false;
	}
	return result;
}
