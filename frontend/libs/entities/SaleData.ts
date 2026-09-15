export type SaleData = {
    productId: string;
    description: string;
    name: string;
    category: string;
    subCategory?: string;
    price: number;
    quantity: number;
}

export type SaleCustomerdata = {
    customerName: string;
    sales: SaleData[];
}