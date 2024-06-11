import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerOrderResolverBase } from "./base/customerOrder.resolver.base";
import { CustomerOrder } from "./base/CustomerOrder";
import { CustomerOrderService } from "./customerOrder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerOrder)
export class CustomerOrderResolver extends CustomerOrderResolverBase {
  constructor(
    protected readonly service: CustomerOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
