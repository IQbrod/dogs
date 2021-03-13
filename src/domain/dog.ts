export class Dog {
    name: string;

    static fromDatabase(row: any): Dog {
        const dog: Dog = new Dog();
        dog.name = row?.name;
        return dog;
    }
}