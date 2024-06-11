import { Montir as TMontir } from "../api/montir/Montir";

export const MONTIR_TITLE_FIELD = "montirName";

export const MontirTitle = (record: TMontir): string => {
  return record.montirName?.toString() || String(record.id);
};
