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

type Ava<D extends {}, T extends IConstruct> = ({deps?: (keyof D)[], injectable: (mp: D) => T}) |  T

function aject<D extends {}, T extends IConstruct, P extends {[id: string]: Ava<D, T>}>(p: P): {[ id in keyof P]: ReturnType<P[id]["ijectable"]>} {
  const res: {[a in keyof P]: IConstruct} = {} as any;
  res['a' as keyof P] = new Repository(1 as any, 'id')
  for(const [k, v] of Object.entries(p)) {
	k
	v
  }
  return res as any;
}

const doge = aject({
	a: {injectable: () => new Repository(1 as any, 'id')},
  b: {injectable: () => new Bucket(1 as any, 'id', 1 as any)}
})

doge
type Bar<T extends {}> = IConstruct | Foo<T>

interface Foo<T extends {}> {
	deps: (keyof T)[]
	injectable: (mp: T) => IConstruct
}

const c: Foo<{ a: IRepository, b: IBucket }> = {
	deps: ['a', 'b'],
	injectable: (mp) => {
		return new Repository(mp.a, 'id')
	}
}

tnject({
	"doge": c,
	"c": (1 as any) as Repository
});

// function f(scope: Construct) {
//   const a = new Repository(scope, 'id')
//  const uid: string = Names.uniqueId(myConstruct);
// }


