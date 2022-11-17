import Joi from "joi";

export const userValidation = (body) => {
  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    mobile: Joi.string().max(15).optional(),
    email: Joi.string().email().required(),
    password: Joi.string().max(50).required(),
    registeredAt: Joi.date(),
    lastLogin: Joi.date(),
    intro: Joi.string().optional(),
  });

  return schema.validate(body);
};
export const postValidation = (body) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(75).required(),
    metaTitle: Joi.string().min(5).max(100).required(),
    slug: Joi.string().max(100).required(),
    summary: Joi.string().max(50).required(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
    publishedAt: Joi.date().required(),
    content: Joi.string().required(),
    user: Joi.string().hex().length(24).required(),
  });

  return schema.validate(body);
};
export const commentValidation = (body) => {
  const schema = Joi.object({
    content: Joi.string().max(75).required(),
    createdAt: Joi.date().required(),
    publishedAt: Joi.date().required(),
  });

  return schema.validate(body);
};
export const categoryValidation = (body) => {
  const schema = Joi.object({
    content: Joi.string().max(75).required(),
    title: Joi.string().min(5).max(75).required(),
    metaTitle: Joi.string().min(5).max(100),
    slug: Joi.string().min(5).max(100),
  });

  return schema.validate(body);
};
