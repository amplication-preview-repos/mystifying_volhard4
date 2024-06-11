import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "service";

export const ServiceTitle = (record: TService): string => {
  return record.service?.toString() || String(record.id);
};
