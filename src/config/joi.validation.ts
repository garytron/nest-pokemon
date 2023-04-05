import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB_URL: Joi.required(),
  PORT: Joi.number().default(3000),
});
