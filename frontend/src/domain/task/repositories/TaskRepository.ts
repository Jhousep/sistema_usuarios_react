import type { Task } from "../entities/Task"
export interface TaskRepository {
    getAll(): Promise<Task[]>
    getById(id: string): Promise<Task[]>
    update(task: Task): Promise<Task>
}