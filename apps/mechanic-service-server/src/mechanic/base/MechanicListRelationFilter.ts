/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MechanicWhereInput } from "./MechanicWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MechanicListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MechanicWhereInput,
  })
  @ValidateNested()
  @Type(() => MechanicWhereInput)
  @IsOptional()
  @Field(() => MechanicWhereInput, {
    nullable: true,
  })
  every?: MechanicWhereInput;

  @ApiProperty({
    required: false,
    type: () => MechanicWhereInput,
  })
  @ValidateNested()
  @Type(() => MechanicWhereInput)
  @IsOptional()
  @Field(() => MechanicWhereInput, {
    nullable: true,
  })
  some?: MechanicWhereInput;

  @ApiProperty({
    required: false,
    type: () => MechanicWhereInput,
  })
  @ValidateNested()
  @Type(() => MechanicWhereInput)
  @IsOptional()
  @Field(() => MechanicWhereInput, {
    nullable: true,
  })
  none?: MechanicWhereInput;
}
export { MechanicListRelationFilter as MechanicListRelationFilter };
