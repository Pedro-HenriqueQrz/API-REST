import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import '../../shared/services/translationsYup';
import { validation } from '../../shared/middleware';

export interface ICidade {
    nome: string;
    estado: string;
}

interface IFilter {
    filter?: string | undefined;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().min(3)
  })),
}));



export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    return res.send('Create!');
};