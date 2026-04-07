import type { Task } from "../entities/Task";
import type { TaskRepository } from "../repositories/TaskRepository";
export class GetTasksById{ 
    private repo : TaskRepository
    constructor(repo : TaskRepository){
        this.repo = repo;
    }
    async execute(id: string): Promise<Task[]>{
       return this.repo.getById(id);
    }
}