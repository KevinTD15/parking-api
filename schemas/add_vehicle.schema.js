import {Type} from '@sinclair/typebox';

export const add_vehicle_schema = Type.Object({
    plate: Type.String({
        errorMessage:{
            type: 'Type of email must be string',
        }
    }),
    model: Type.String({
        errorMessage:{
            type: 'Type of password must be string'
        }
    })
});