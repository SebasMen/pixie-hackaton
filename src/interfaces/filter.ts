export interface filterShop {
    typePet: typePet[],
    agePet: agePet[],
}

export type agePet = 'cachorros' | 'adultos' | 'senior';
export type typePet = 'CAT' | 'DOG';
