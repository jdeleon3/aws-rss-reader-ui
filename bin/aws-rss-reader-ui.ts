#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsRssReaderUiStack } from '../lib/aws-rss-reader-ui-stack';

const app = new cdk.App();
new AwsRssReaderUiStack(app, 'AwsRssReaderUiStack');
