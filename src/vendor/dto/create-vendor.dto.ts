import { IsInt, IsString, IsNotEmpty, Min, Max, Length } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  capacity: string;

  @IsString()
  @IsNotEmpty()
  leadTime: string;

  @IsString()
  @IsNotEmpty()
  accidentScore: string;

  @IsString()
  @IsNotEmpty()
  kpiScore: string;

  @IsString()
  @IsNotEmpty()
  percentage: string;
}
