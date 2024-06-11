import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MontirModuleBase } from "./base/montir.module.base";
import { MontirService } from "./montir.service";
import { MontirController } from "./montir.controller";
import { MontirResolver } from "./montir.resolver";

@Module({
  imports: [MontirModuleBase, forwardRef(() => AuthModule)],
  controllers: [MontirController],
  providers: [MontirService, MontirResolver],
  exports: [MontirService],
})
export class MontirModule {}
