import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import '../../shared/services/translationsYup';
import { validation } from '../../shared/middleware';

export interface ICidade {
    nome: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    return res.status(StatusCodes.CREATED).send('Create!');
};