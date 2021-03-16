        
import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./local.guard";
import { AuthService } from "./services/auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}


    @UseGuards(LocalAuthGuard)
    @Post('login') 
    async findById(@Req() request): Promise<any>{  
        console.log("🚀 ~ file: auth.controller.ts ~ line 1 ~ AuthController ~ findById ~ user", request.user)
        const token = this.authService.login(request.user);
        console.log("🚀 ~ file: auth.controller.ts ~ line 17 ~ AuthController ~ findById ~ token", token)
        return token;
    }

  
}