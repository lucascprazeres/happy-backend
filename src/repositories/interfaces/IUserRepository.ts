import { User } from "@prisma/client";

export interface ICreateUserDTO {
	name: string;
	email: string;
	password: string;
}

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<User>;
	delete(email: string): Promise<User>;
	findByEmail(email: string): Promise<User | null>;
}
