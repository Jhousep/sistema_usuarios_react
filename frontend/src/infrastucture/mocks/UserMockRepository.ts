import type { User } from "../../domain/user/entities/User";
import type { UserRepository } from "../../domain/user/repositories/UserRepository";

const mockUser: User[] = [
  {
    id: "1",
    name: "Juan",
    email: "juan@test.com",
    active: true,
  },
  {
    id: "2",
    name: "Ana",
    email: "ana@test.com",
    active: false,
  },
];

export class UserMockRepository implements UserRepository{
    async getAll(): Promise<User[]> {
        return mockUser;
    }

    async getById(id: string): Promise<User | null> {
        const user = mockUser.find((u) => u.id === id);
        return user || null;
    }

    async update(user: User): Promise<User> {
        return user;
    }
}
