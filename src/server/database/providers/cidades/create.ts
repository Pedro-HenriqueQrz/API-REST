import { ICidade } from "../../models";
import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {

    try {
        const [result] = await Knex(ETableNames.cidade).insert(cidade).returning('id');

        if (typeof result === 'object' && result !== null) {
            return Number(result.id);
        } else if (typeof result === 'number') {
             return result; 
        } else {
            throw new Error('Invalid result format');
        }

    } catch (error) {
        console.log(error)
        return new Error('Erro ao cadastrar o registro');
    }


    
    
}