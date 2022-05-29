import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
	async handle(request: Request, response: Response) {
		const { name, email, password } = request.body;

		const createUserService = new CreateUserService();

		await createUserService.execute({ name, email, password });

		return response.send();
	}
}
