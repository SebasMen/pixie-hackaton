export interface filterShop {
    typePet: typePet[],
    agePet: agePet[],
    typeProduct?: typeProduct
}

export interface FilterPet {
    typePet: typePet[];
    agePet: agePet[];
}

export type agePet = 'cachorros' | 'adultos' | 'senior';
export type typePet = 'CAT' | 'DOG';
export type typeProduct = 'Alimentos' | 'Snacks' | 'Accesorios' | '';
