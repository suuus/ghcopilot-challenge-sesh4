import { Product, InventoryItem, Discount } from './types';

export class InventoryService {
    private inventory: Map<string, number> = new Map();

    async checkAvailability(sku: string, quantity: number): Promise<boolean> {
        const available = this.inventory.get(sku) || 0;
        return available >= quantity;
    }

    async updateStock(sku: string, quantity: number): Promise<void> {
        this.inventory.set(sku, quantity);
    }
}

export class DiscountService {
    private discounts: Map<string, number> = new Map();

    registerDiscount(code: string, percentage: number): void {
        if (percentage < 0 || percentage > 100) {
            throw new Error('Invalid discount percentage');
        }
        this.discounts.set(code.toUpperCase(), percentage);
    }

    getDiscount(code: string): number {
        const discount = this.discounts.get(code.toUpperCase());
        return discount || 0;
    }
}