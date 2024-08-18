import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import { Bucket, IBucket } from 'aws-cdk-lib/aws-s3';
import { inject, INode } from '.';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FargateTaskDefinition } from 'aws-cdk-lib/aws-ecs';



const fargateNode: INode<{ repository: IRepository, bucket: IBucket }> = {
	children: ['repository', 'bucket'],
	node: (scope: Construct, children) => {
		const bucket = children.bucket;
		const repository = children.repository;
		console.log(bucket, repository);
		return new FargateTaskDefinition(scope, 'taskDefinition',)
	}
}

class ExampleStack extends Stack {

	constructor(scope: Construct, id: string, props: StackProps) {
		super(scope, id, props);

		inject(
			this,
			new Bucket(this, 'bucket'),
			new Repository(this, 'repository'),
			fargateNode
		);
	}
}


