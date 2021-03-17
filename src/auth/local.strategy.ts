import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { AuthService } from './services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService : AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log("🚀 ~ file: local.strategy.ts ~ line 13 ~ LocalStrategy ~ validate ~ password", password)
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}