import { extendType } from 'nexus';
import { Context } from '../../context';

export const MemberQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('members', {
            type: 'Member',
            resolve: async (_parent, _args, ctx: Context) => {
                return ctx.prisma.member.findMany();
            },
        });
    },
});

// export const MemberMutation = extendType({
//     type: 'Mutation',
//     definition(t) {
//         t.field('createMember', {
//             type: 'Member',
//             args: {
//                 name: 'String',
//                 email: 'String',
//             },
//             resolve: async (_parent, { name, email }, ctx: Context) => {
//                 return ctx.prisma.member.create({
//                     data: { name, email },
//                 });
//             },
//         });
//     },
// });
