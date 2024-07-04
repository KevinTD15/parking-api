import {Type} from '@sinclair/typebox';

export const login_schema = Type.Object({
    email: Type.String({
        format:'email',
        errorMessage:{
            type: 'Type of email must be string',
            format: 'Format must be valid email'
        }
    }),
    password: Type.String({
        minLength: 8,
        maxLength: 100,
        //pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$',
        errorMessage:{
            type: 'Type of password must be string'
        }
    })
});