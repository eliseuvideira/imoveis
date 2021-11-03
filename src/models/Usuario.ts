import { createModel } from "@ev-postgres/model";

export interface UsuarioProps {
  usuarioId?: number;
  login: string;
  senha: string;
  lastLogin?: Date;
  nome: string;
  isRoot?: boolean;
  resetar?: boolean;
  avatarId: string;
  ativo?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UsuarioPropsPrimary {
  usuarioId: number;
}

export const Usuario = createModel<UsuarioProps, UsuarioPropsPrimary>(
  "usuarios.usuarios",
  ({ usuarioId }) => ({ usuarioId }),
);
