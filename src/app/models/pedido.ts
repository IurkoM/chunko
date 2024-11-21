import { Producto } from "./producto";

export interface Pedido {
}
export interface Pedido {
    idPedido: string;
    producto: Producto;
    cantidad: number;
    total: number;
}