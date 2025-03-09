import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';
import * as resolvers from './resolvers';

// schema 통합
export const schema = makeSchema({
    types: [types, resolvers],
    // nexus schema, type 파일 생성 경로
    outputs: {
        schema: join(__dirname, 'generated/schema.graphql'),
        typegen: join(__dirname, 'generated/nexus.ts'),
    },
    // graphql resolver 에서 사용할 context 설정
    contextType: {
        export: 'Context',
        module: require.resolve('../context'),
    },
});