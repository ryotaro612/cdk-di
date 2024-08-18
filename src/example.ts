import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import { IListener } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { inject, INode } from '.';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FargateTaskDefinition } from 'aws-cdk-lib/aws-ecs';


// const d: INode<{ a: IRepository }> = {
// 	children: ['a'],
// 	node: (mp) => {
// 		return new Bucket(mp.a, 'id')
// 	}
// }

// const e: INode<{ d: IBucket }> = {
// 	children: ['d'],
// 	node: (mp) => {
// 		return new Bucket(mp['d'], 'id')
// 	}
// }


const fargateNode: INode<{ repository: IRepository, bucket: IBucket }> = {
	children: ['repository', 'bucket'],
	node: (scope: Construct, children) => {
		const bucket = children.bucket;
		const repository = children.repository;
		console.log(bucket, repository);
		return new FargateTaskDefinition(scope, 'taskDefinition',)
	}
}

//const res = inject([new Bucket(1 as any, 'a')], [d, e, l, { children: ['x', 'b'], node: (mp) => new Bucket(mp['b'], 'id') }]);

class ExampleStack extends Stack {

	constructor(scope: Construct, id: string, props: StackProps) {
		super(scope, id, props);

		inject(this,
			[new Bucket(this, 'bucket'), new Repository(this, 'repository')],
			[fargateNode]);
	}
}


