import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    createRegister(req: CreateRegisterDTO): Promise<string>;
}
