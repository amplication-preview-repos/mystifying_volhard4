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
import { CustomerOrderListRelationFilter } from "../../customerOrder/base/CustomerOrderListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class ServiceWhereInput {
  @ApiProperty({
    required: false,
    type: () => CustomerOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerOrderListRelationFilter)
  @IsOptional()
  @Field(() => CustomerOrderListRelationFilter, {
    nullable: true,
  })
  customerOrders?: CustomerOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  service?: StringNullableFilter;
}

export { ServiceWhereInput as ServiceWhereInput };
