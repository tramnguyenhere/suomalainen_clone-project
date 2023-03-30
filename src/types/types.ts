export interface Link {
    id: string;
    label: string;
    link: string;
}

type BookCategory ='Historialliset romaanit' |'Kaunokirjallisuus' | 'Kuumimmat tulossa olevat kirjauutuudet'

export interface BookInterface {
    id: string,
    title: string,
    author: string,
    description: string,
    type: string,
    price: number,
    discountPercentage: number,
    rating: number,
    image: string,
    category: BookCategory[]
}