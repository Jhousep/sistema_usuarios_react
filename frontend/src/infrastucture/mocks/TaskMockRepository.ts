import type { Task } from "../../domain/task/entities/Task";
import type { TaskRepository } from "../../domain/task/repositories/TaskRepository";

const mockTask: Task[] = [
    {
        id: "1",
        userId: "1",
        title: "Tarea 1",
        description: "Descripción de la tarea 1"
    },
    {
        id: "2",
        userId: "1",
        title: "Tarea 2",
        description: "Descripción de la tarea 2"
    },
    {
        id: "3",
        userId: "3",
        title: "Tarea 3",
        description: "Descripción de la tarea 3"
    },
]

export class TaskMockRepository implements TaskRepository {
    async getAll(): Promise<Task[]> {
        return mockTask;
    }
    async getById(id: string): Promise<Task[]> {
        return mockTask.filter((task) => task.userId === id);
    }
    async update(task: Task): Promise<Task> {
       return task;
    }
}