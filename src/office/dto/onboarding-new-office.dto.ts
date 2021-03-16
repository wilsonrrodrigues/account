import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class OnboardingNewOffice {

    @IsNotEmpty({message: 'Digite o seu nome'})
    @IsString()
    @MinLength(2, {message: 'Seu nome deve conter no mínimo 2 caracteres'})
    name: string;

    @IsNotEmpty({message: 'Digite o seu e-mail'})
    @IsEmail()
    email: string;

    @IsNotEmpty({message: 'Digite a sua senha'})
    @IsString()
    @MinLength(6, {message: 'Sua senha deve conter no mínimo 6 caracteres'})
    password: string;

    @IsNotEmpty({message: 'Digite o nome do escritório'})
    @IsString()
    @MinLength(2, {message: 'O nome de escritório deve conter no mínimo 2 caracteres'})
    officeName: string;

}