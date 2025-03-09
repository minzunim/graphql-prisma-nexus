import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';
import * as resolvers from './resolvers';

// schema 통합
export const schema = makeSchema({
    types: [types, resolvers],
    outputs: {
        schema: join(__dirname, 'generated/schema.graphql'),
        typegen: join(__dirname, 'generated/nexus.ts'),
    },
    contextType: {
        export: 'Context',
        module: require.resolve('../context'),
    },
});