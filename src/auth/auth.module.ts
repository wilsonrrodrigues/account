import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccountModule } from 'src/account/account.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './jwtt.constants';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        AccountModule, 
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
          }),
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthService,
    ],
    exports: [
        AuthService,
    ]

})
export class AuthModule {}
