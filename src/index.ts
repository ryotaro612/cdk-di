import { BitBucketSourceCredentials } from 'aws-cdk-lib/aws-codebuild';
import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { IConstruct } from 'constructs';


export function inject(deps: DepMap) {
	deps
	return;
}

interface DepMap {
	[id: string]: Dep<IConstruct>
}


type Dep<T extends IConstruct> = IConstruct | InterDep<T>


type Injectable<T extends IConstruct> = (mp: IConstructMap<T>) => T

interface InterDep<T extends IConstruct> {
	deps: string[],
	injectable: Injectable<T>
}


interface IConstructMap<T extends IConstruct> {
	[id: string]: T
}

interface A extends IConstructMap<IConstruct> {
	a: IRepository
	c: IBucket
}


function a(mp: A): Repository {
	let c: any
	mp.a
	return c
}
a


inject({
});

function tnject<T extends {}, A extends IConstruct, R extends { [id: string]: A }>(deps: { [id: string]: Bar<T> }): R {
	deps
	return 1 as any
}

type Ava<D extends {}, T extends IConstruct> = { deps?: (keyof D)[], injectable: (mp: D) => T }

// function oject<D extends {}, T extends IConstruct, P extends {[id: string]: Ava<D, T>}>(p: P): {[ id in keyof P]: (Ava<D, T> extends {injectable: (mp: D)=> T} ? ReturnType<P[id]["injectable"]> : T)} {
//   const res: {[a in keyof P]: IConstruct} = {} as any;
//   res['a' as keyof P] = new Repository(1 as any, 'id')
//   for(const [k, v] of Object.entries(p)) {
// 	k
// 	v
//   }
//   return res as any;
// }

function aject<D extends {}, T extends IConstruct, P extends { [id: string]: Ava<D, T> }>(p: P): { [id in keyof P]: ReturnType<P[id]["injectable"]> } {
	const res: { [a in keyof P]: IConstruct } = {} as any;
	res['a' as keyof P] = new Repository(1 as any, 'id')
	for (const [k, v] of Object.entries(p)) {
		k
		v
	}
	return res as any;
}






interface Foo<T extends { [id: string]: IConstruct }> {
	deps: (keyof T)[]
	injectable: (mp: T) => IConstruct
}

const c: Foo<{ a: IRepository, b: IBucket }> = {
	deps: ['a', 'b'],
	injectable: (mp) => {
		return new Repository(mp.a, 'id')
	}
}

const d: Foo<{ b: IRepository, a: IBucket }> = {
	deps: ['a', 'b'],
	injectable: (mp) => {
		return new Bucket(mp.a, 'id')
	}
}





function eject<T extends { [id: string]: IConstruct }, P extends { [id in string]: Foo<T> }>(p: P): { [id in keyof P]: ReturnType<P[id]["injectable"]> } {
	const res: { [a in keyof P]: IConstruct } = {} as any;
	res['a' as keyof P] = new Repository(1 as any, 'id')
	for (const [k, v] of Object.entries(p)) {
		k
		v
	}
	return res as any;
}

const res = eject({
	a: c,
	b: d
});
res

tnject({
	"doge": c,
	"c": (1 as any) as Repository
});

// function f(scope: Construct) {
//   const a = new Repository(scope, 'id')
//  const uid: string = Names.uniqueId(myConstruct);
// }


