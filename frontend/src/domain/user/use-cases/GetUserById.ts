import type { User }  from "../entities/User";
import type { UserRepository }  from "../repositories/UserRepository";

export class GetUserById{
    private rep : UserRepository;
    constructor(rep : UserRepository){
        this.rep = rep;
    }

    async execute(id: string): Promise<User | null>{
        return this.rep.getById(id);
    }
}