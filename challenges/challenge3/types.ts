export interface Product {
    id: string;
    name: string;
    price: number;
    sku: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Discount {
    code: string;
    percentage: number;
}

export interface InventoryItem {
    sku: string;
    quantity: number;
}