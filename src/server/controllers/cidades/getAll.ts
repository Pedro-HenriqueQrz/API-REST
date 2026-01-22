import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import '../../shared/services/translationsYup';
import { validation } from '../../shared/middleware';

export interface IQUeryPops {
    page?: number | undefined;
    limit?: number | undefined;
    filter?: number | undefined;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQUeryPops>(yup.object().shape({
    page: yup.number().moreThan(0),
    limit: yup.number().moreThan(0),
    filter: yup.number(),
  })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQUeryPops>, res: Response) => {
    console.log(req.query)
    return res.status(StatusCodes.BAD_REQUEST).send('Get all ainda não implementado');
};