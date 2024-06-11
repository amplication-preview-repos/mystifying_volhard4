import { Mechanic as TMechanic } from "../api/mechanic/Mechanic";

export const MECHANIC_TITLE_FIELD = "id";

export const MechanicTitle = (record: TMechanic): string => {
  return record.id?.toString() || String(record.id);
};
