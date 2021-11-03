import { createModel } from "@ev-postgres/model";

export interface AnexoProps {
  anexoId: string;
  nome: string;
  mimetype: string;
  createdAt?: Date;
}

export interface AnexoPropsPrimary {
  anexoId: string;
}

export const Anexo = createModel<AnexoProps, AnexoPropsPrimary>(
  "anexos.anexos",
  ({ anexoId }) => ({ anexoId }),
);
