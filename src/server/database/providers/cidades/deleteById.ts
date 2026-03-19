import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"

export const deleteById = async (id: number): Promise<void | Error> => {
    
    try {
        const result = await Knex(ETableNames.cidade)
        .where('id', '=', id)
        .delete();

        if (result > 0) return;

    } catch (error) {
        console.log(error);
        return new Error('Erro ao apagar registro')
    }
}