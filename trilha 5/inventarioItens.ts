abstract class Inventory {
  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  protected items: Record<string, number> = {};

  addItem(item: string, quantity: number): void {
    this.items[item] = (this.items[item] || 0) + quantity;
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

class StoreInventory extends Inventory {
  protected items: Record<string, number> = {};
  private maxPerItem = 10;

  addItem(item: string, quantity: number): void {
    const atual = this.items[item] || 0;
    const novoTotal = Math.min(atual + quantity, this.maxPerItem);
    this.items[item] = novoTotal;
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}
