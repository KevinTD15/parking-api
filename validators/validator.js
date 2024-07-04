import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormat from 'ajv-formats';

export const validate = (to_validate) => {
    const ajv = new Ajv({allErrors : true}).addKeyword('kind').addKeyword('modifier');
    addFormat(ajv, ['email']);
    addErrors(ajv);

    return ajv.compile(to_validate);
};

