import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class AuthService {

    constructor(
        private accountService: AccountService,
        private jwtService: JwtService
      ) {}
    
      async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.accountService.validateUser(username,pass);
        if (user && user.password === pass) {
          const { _id, email, name } = user;
          console.log("🚀 ~ file: auth.service.ts ~ line 19 ~ AuthService ~ validateUser ~ result", user);
          return {_id, email, name};
        }
          
        return null;
      }
    
      async login(user: any) {
        console.log("🚀 ~ file: auth.service.ts ~ line 23 ~ AuthService ~ login ~ user", user)
        const payload = { email: user.email, sub: user._id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
        
}
