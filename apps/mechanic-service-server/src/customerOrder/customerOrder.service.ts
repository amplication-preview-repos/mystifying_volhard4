import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerOrderServiceBase } from "./base/customerOrder.service.base";

@Injectable()
export class CustomerOrderService extends CustomerOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
