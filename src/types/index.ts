export interface Business {
    id: number;
    name: string;
    rewards: number;
}

export interface Promo {
    id: number;
    description: string;
    validUntil: Date;
}  