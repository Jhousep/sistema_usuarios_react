import type { User } from "../entities/User";

export interface UserRepository {
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    update(user: User): Promise<User>;
}