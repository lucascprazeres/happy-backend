import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUserRequest {
	name: string;
	email: string;
	password: string;
}

export class CreateUserService {
	async execute({ name, email, password }: ICreateUserRequest) {
		const usersRepository = new UsersRepository();

		if (!email) {
			throw new Error("Incorrect email.");
		}

		const userAlreadyExists = await usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new Error("User already exists.");
		}

		const user = await usersRepository.create({
			name,
			email,
			password,
		});

		return user;
	}
}
