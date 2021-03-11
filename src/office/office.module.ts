import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from 'src/account/account.module';
import { OfficeController } from './office.controller';
import { OfficeService } from './office.service';
import { OfficeSchema, Office } from './schema/office.schema';

@Module({
  imports: [
    AccountModule,
    MongooseModule.forFeature([
      {
          name: Office.name,
          schema: OfficeSchema
      }
  ])
  ],
  controllers: [OfficeController],
  providers: [OfficeService]
})
export class OfficeModule {}
