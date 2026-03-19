import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';


export const count = async (filter = ''): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .where('nome', 'like', `%${filter}%`)
      .count<[{ count: number }]>('* as count');

    const countValue = result?.[0]?.count;

    if (countValue !== undefined && Number.isInteger(Number(countValue))) return Number(countValue);

    return new Error('Erro ao consultar a quantidade total de registros');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar a quantidade total de registros');
  }
};