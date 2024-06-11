/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomerOrderWhereUniqueInput } from "../../customerOrder/base/CustomerOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerOrderCreateNestedManyWithoutVehiclesInput {
  @Field(() => [CustomerOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerOrderWhereUniqueInput],
  })
  connect?: Array<CustomerOrderWhereUniqueInput>;
}

export { CustomerOrderCreateNestedManyWithoutVehiclesInput as CustomerOrderCreateNestedManyWithoutVehiclesInput };
