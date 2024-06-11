import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MontirService } from "./montir.service";
import { MontirControllerBase } from "./base/montir.controller.base";

@swagger.ApiTags("montirs")
@common.Controller("montirs")
export class MontirController extends MontirControllerBase {
  constructor(
    protected readonly service: MontirService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
