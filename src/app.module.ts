import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { OfficeModule } from './office/office.module';
import { PlanModule } from './plan/plan.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URI}/${process.env.MONGO_DATABASE}`), 
    AccountModule, 
    OfficeModule, 
    PlanModule, AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
