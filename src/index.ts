import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { IConstruct } from 'constructs';


type Foo<T extends { [id: string]: IConstruct }> = {
	deps: (keyof T)[]
	injectable: (mp: T) => IConstruct
} | IConstruct

const c: Foo<{  }> = {
	deps: [],
	injectable: (_) => {
		return new Repository(1 as any, 'id')
	}
}

const d: Foo<{ a: IRepository }> = {
	deps: ['a'],
	injectable: (mp) => {
		return new Bucket(mp.a, 'id')
	}
}


const e: Foo<{ a: IRepository, d: IBucket }> = {
  deps: ['a', 'd'],
	injectable: (mp) => {
		return new Bucket(mp['a'], 'id')
	}
}



function eject<T extends { [id in string]: IConstruct }, P extends { [id in string]: Foo<T> }>(p: { [id in string]: Foo<T>}) {
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
  b: d,
  x: e,
});
res

