const Joi = require("joi");

const id = Joi.number();

const getOfertSchema = Joi.object({
	id: id.required(),
})

module.exports = { getOfertSchema }