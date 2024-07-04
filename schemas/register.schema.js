import {Type} from '@sinclair/typebox';

export const register_schema = Type.Object({
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
    }),
    name: Type.String({
        minLength: 5,
        errorMessage:{
            type: 'Minimum length must be 5'
        }
    })
});