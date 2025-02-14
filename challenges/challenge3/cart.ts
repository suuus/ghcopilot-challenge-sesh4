import { Product, CartItem, Discount } from './types';

export class Cart {
    private items: CartItem[] = [];
    
    constructor(
        private inventoryService: any,
        private discountService: any
    ) {}

    // TODO: Implement these methods
    async addToCart(product: Product, quantity: number): Promise<void> {
        throw new Error('Not implemented');
    }

    async removeFromCart(productId: string): Promise<void> {
        throw new Error('Not implemented');
    }

    async calculateTotal(discountCode?: string): Promise<number> {
        throw new Error('Not implemented');
    }

    getItems(): CartItem[] {
        throw new Error('Not implemented');
    }
}