// Creamos la interfaz para controlar que los intrumentos sean de este tipo
export interface Instrument {
    id: number;
    name: string;
    price: number;
    stock: number;
    quantity: number;
    image: string;
}