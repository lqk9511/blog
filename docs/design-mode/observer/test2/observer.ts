import { Observable } from "./observable";

export interface Observer {
  update(obs: Observable, data?: any): void;
}
