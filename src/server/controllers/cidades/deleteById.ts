import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import '../../shared/services/translationsYup';
import { validation } from '../../shared/middleware';

export interface IParamProps {
    id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().moreThan(0).required(),
  })),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params)
    return res.status(StatusCodes.BAD_REQUEST).send('Delete By ID ainda não implementado');
};