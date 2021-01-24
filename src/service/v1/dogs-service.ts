import { dogRepository } from '../../repository/v1/dogs-repository';

class DogService {
    async getDogs() {
        return await dogRepository.listAll();
    }
}

const instance: DogService = new DogService();
export { instance as dogService };