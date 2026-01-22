import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import '../../shared/services/translationsYup';
import { validation } from '../../shared/middleware';

export interface IParamProps {
    id?: number;
}

export interface IBodyProps {
    nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().moreThan(0).required(),
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3)
  }))
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    console.log(req.params)
    console.log(req.body)
    return res.status(StatusCodes.BAD_REQUEST).send('Update By ID ainda não implementado');
};