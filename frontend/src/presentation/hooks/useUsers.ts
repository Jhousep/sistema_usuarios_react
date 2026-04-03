import { useEffect, useState } from "react"
import type { User } from "../../domain/user/entities/User";
import { GetUsers } from "../../domain/user/use-cases/GetUsers";
import { UserMockRepository } from "../../infrastucture/mocks/UserMockRepository";

export function useUsers(){
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const repo = new UserMockRepository();
        const getUsers = new GetUsers(repo);

        getUsers.execute().then((data) => {
            setUsers(data);
        })
        .catch(error => {
            setError(error.message || 'Something went wrong');
        })
        .finally(()=>  {
            setLoading(false);
        })
    }, [])

    return { users, loading, error}
}