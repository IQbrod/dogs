import { Dog } from '../../domain/dog';
import { Consumer } from '../../utils/types';
import { datasource } from '../../utils/database/database-service';

class DogRepository {
    listAll(next: Consumer<Dog[]>) {
        const query: string = "SELECT * FROM dog;";
        datasource.query(query, (err, rows, fields) => {
            if (err) { next(null, err); }
            next(rows.map((row: any) => Dog.fromDatabase(row)));
        });
    }
}

const instance: DogRepository = new DogRepository();
export { instance as dogRepository };