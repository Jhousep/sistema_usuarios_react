import type { User } from "../entities/User";
import type { UserRepository } from "../repositories/UserRepository";

export class GetUsers{
    private repo: UserRepository;
    constructor (repo: UserRepository){
        this.repo = repo
    }

    async execute(): Promise<User[]>{
        return this.repo.getAll();
    }
}