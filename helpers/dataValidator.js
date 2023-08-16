const Joi = require('joi');

const dataValidation = data => {
	const schema = Joi.object({
		name: Joi.string().alphanum().required(),
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
		phone: Joi.string().required(),
	});
	return schema.validate(data);
};

module.exports = dataValidation;
