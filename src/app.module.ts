import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { OfficeModule } from './office/office.module';
import { PlanModule } from './plan/plan.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URI}/${process.env.MONGO_DATABASE}`), 
    AccountModule, 
    OfficeModule, 
    PlanModule, AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_GUARD,
    useClass: RolesGuard
  }
],
})
export class AppModule {}
