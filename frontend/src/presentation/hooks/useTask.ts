import { useEffect, useState } from "react";
import type { Task } from "../../domain/task/entities/Task";
import { GetTasksById } from "../../domain/task/use-cases/GetTasksById";
import { TaskMockRepository } from "../../infrastucture/mocks/TaskMockRepository";

export function useTask(id: string){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const repo = new TaskMockRepository();
        const getTasksById = new GetTasksById(repo);

        getTasksById.execute(id).then((data) => {
            setTasks(data);
        })
        .catch(error => {
            setError(error.message || 'Something went wrong');
        })
        .finally(()=>  {
            setLoading(false);
        })
    }, [id])

    return { tasks, loading, error}
}