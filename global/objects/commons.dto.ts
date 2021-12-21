import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Status } from '../typescript/commons.model';

export class StatusDto implements Status {
  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsNotEmpty()
  message: string;
}
