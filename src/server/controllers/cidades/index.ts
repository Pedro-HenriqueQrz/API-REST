import * as create from './create';
export type { ICidade } from './create';
import * as getAll from './getAll';

export const CidadesController = {
  ...create,
  ...getAll
};