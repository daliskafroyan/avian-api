import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, Min, Max, Length } from 'class-validator';

export class CreateVendorDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  price: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  capacity: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  leadTime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  accidentScore: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  kpiScore: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  percentage: string;
}
