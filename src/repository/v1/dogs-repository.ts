import { datasource } from '../../utils/database/database-service';

class DogRepository {
    async listAll() {
        const query: string = "SELECT * FROM dog;";

        return await datasource.query(query, (err, rows, fields) => {
            if (err) { throw err; }
            return rows;
        });
    }
}

const instance: DogRepository = new DogRepository();
export { instance as dogRepository };