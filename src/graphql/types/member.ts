import { objectType } from 'nexus';

// member type 설정
export const Member = objectType({
    name: 'Member',
    definition(t) {
        t.int('idx');
        t.string('name');
        t.string('email');
    },
});