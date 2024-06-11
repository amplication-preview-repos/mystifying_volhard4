import { MontirWhereInput } from "./MontirWhereInput";
import { MontirOrderByInput } from "./MontirOrderByInput";

export type MontirFindManyArgs = {
  where?: MontirWhereInput;
  orderBy?: Array<MontirOrderByInput>;
  skip?: number;
  take?: number;
};
