/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Montir } from "../../montir/base/Montir";
import { Service } from "../../service/base/Service";
import { Status } from "../../status/base/Status";
import { User } from "../../user/base/User";
import { Vehicle } from "../../vehicle/base/Vehicle";

@ObjectType()
class CustomerOrder {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: false,
    type: () => Montir,
  })
  @ValidateNested()
  @Type(() => Montir)
  @IsOptional()
  montir?: Montir | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  problem!: string | null;

  @ApiProperty({
    required: false,
    type: () => Service,
  })
  @ValidateNested()
  @Type(() => Service)
  @IsOptional()
  service?: Service | null;

  @ApiProperty({
    required: false,
    type: () => Status,
  })
  @ValidateNested()
  @Type(() => Status)
  @IsOptional()
  status?: Status | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;

  @ApiProperty({
    required: false,
    type: () => Vehicle,
  })
  @ValidateNested()
  @Type(() => Vehicle)
  @IsOptional()
  vehicle?: Vehicle | null;
}

export { CustomerOrder as CustomerOrder };
