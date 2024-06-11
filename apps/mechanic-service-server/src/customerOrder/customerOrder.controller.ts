import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerOrderService } from "./customerOrder.service";
import { CustomerOrderControllerBase } from "./base/customerOrder.controller.base";

@swagger.ApiTags("customerOrders")
@common.Controller("customerOrders")
export class CustomerOrderController extends CustomerOrderControllerBase {
  constructor(
    protected readonly service: CustomerOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
