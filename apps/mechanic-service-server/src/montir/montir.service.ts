import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MontirServiceBase } from "./base/montir.service.base";

@Injectable()
export class MontirService extends MontirServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
