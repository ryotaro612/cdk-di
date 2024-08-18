import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import { IBucket } from 'aws-cdk-lib/aws-s3';
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



// function f(scope: Construct) {
//   const a = new Repository(scope, 'id')
//  const uid: string = Names.uniqueId(myConstruct);
// }

