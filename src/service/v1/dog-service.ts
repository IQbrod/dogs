import { Dog } from '../../domain/dog';
import { Consumer } from '../../utils/types';
import { dogRepository } from '../../repository/v1/dog-repository';

class DogService {
    getDogs(next: Consumer<Dog[]>) {
        dogRepository.listAll(next);
    }
}

const instance: DogService = new DogService();
export { instance as dogService };