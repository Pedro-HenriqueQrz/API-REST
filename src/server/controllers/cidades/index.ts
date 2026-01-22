import * as create from './create';
import * as deleteById from './deleteById';
export type { ICidade } from './create';
import * as getAll from './getAll';
import * as getById from './getById'
import * as updateById from './updateById'

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById
};