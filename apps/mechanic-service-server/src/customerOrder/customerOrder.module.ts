import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerOrderModuleBase } from "./base/customerOrder.module.base";
import { CustomerOrderService } from "./customerOrder.service";
import { CustomerOrderController } from "./customerOrder.controller";
import { CustomerOrderResolver } from "./customerOrder.resolver";

@Module({
  imports: [CustomerOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerOrderController],
  providers: [CustomerOrderService, CustomerOrderResolver],
  exports: [CustomerOrderService],
})
export class CustomerOrderModule {}
