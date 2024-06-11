import { Montir } from "../montir/Montir";
import { Service } from "../service/Service";
import { Status } from "../status/Status";
import { User } from "../user/User";
import { Vehicle } from "../vehicle/Vehicle";

export type CustomerOrder = {
  createdAt: Date;
  id: string;
  location: string | null;
  montir?: Montir | null;
  problem: string | null;
  service?: Service | null;
  status?: Status | null;
  updatedAt: Date;
  user?: User | null;
  vehicle?: Vehicle | null;
};
