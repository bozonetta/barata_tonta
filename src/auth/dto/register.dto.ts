import { IsOptional, IsString } from "class-validator";

export class RegisterDto{
@IsString()
@IsOptional()
nome?: string

@IsString()
email: string

@IsString()
password: string
}