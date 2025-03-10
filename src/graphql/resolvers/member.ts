import { extendType, intArg, nonNull } from 'nexus';
import { Context } from '../../context';

export const MemberQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('members', {
            type: 'Member',
            resolve: async (_parent, _args, ctx: Context) => {
                return ctx.prisma.member.findMany();
            },
        }),

        t.field('member', {
            type: 'Member',
            args: {
                idx: 'Int'
            },
            resolve: async (_parent, args, ctx: Context) => {

                if (args.idx == null) {
                    throw new Error("idx 값이 없습니다.");
                }
            
                return ctx.prisma.member.findUnique({
                where: { idx: args.idx }
            })
        }
    })
    }
});

export const MemberMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createMember', {
            type: 'Member',
            args: {
                id: 'String',
                name: 'String',
                email: 'String',
            },
            resolve: async (_parent, { id, name, email }, ctx: Context) => {

                if (!id || !name) {
                    throw new Error("id, 이름이 없습니다.");
                }

                return ctx.prisma.member.create({
                    data: { id, name, email },
                });
            },
        });
    },
});
