import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
import { EMAIL_REQUIRED, MESSAGE_REQUIRED, NAME_REQUIRED, PASSWORD_MIN_CHARS } from "./constants.js";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export const loginValidator = [
  body("email").trim().isEmail().withMessage(EMAIL_REQUIRED),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage(PASSWORD_MIN_CHARS),
];

export const signupValidator = [
  body("name").notEmpty().withMessage(NAME_REQUIRED),
  ...loginValidator,
];

export const chatCompletionValidator = [
  body("message").notEmpty().withMessage(MESSAGE_REQUIRED),
];
