import { Vehicle } from "../vehicle/Vehicle";

export type Category = {
  category: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  vehicles?: Array<Vehicle>;
};
