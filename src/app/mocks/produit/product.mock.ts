export interface Product{
    id: number;
    title: string;
    price: number;
    isAvailable: boolean;
    description: string;
}

export const PRODUCTS : Product[]=[
    {
        id: 1,
        title: "chaussons",
        price: 12,
        isAvailable: true,
        description: "achetez ça"
    },
    {
        id: 2,
        title: "vest",
        price: 20,
        isAvailable: true,
        description: "achetez ça"

    },
    {
        id: 3,
        title: "pantalon",
        price: 30,
        isAvailable: false,
        description: "achetez ça"

    }
]


