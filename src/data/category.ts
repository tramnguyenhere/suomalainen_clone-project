import { v4 as uuidv4 } from 'uuid'
import { Link } from '../types/types';

interface categoryObject {
    id: string;
    label: string;
    fontawesomeIcon: string;
    subCategory: Link [] 
}

const benefits: categoryObject = {
    id: uuidv4(),
    label: "Edut ha kampanjat",
    fontawesomeIcon: "fa-solid fa-percent",
    subCategory: [
        {
            id: uuidv4(),
            label: "Kuukauden Pöllöklubiedut",
            link: "/collections/kuukauden-polloklubiedut",
        },
        {
            id: uuidv4(),
            label: "Ajankohtaista nyt",
            link: "/collections/ajankohtaista-nyt",
        },
        {
            id: uuidv4(),
            label: "Ajanvietettä lapsille",
            link: "/collections/ajanvietetta-lapsille",
        },
        {
            id: uuidv4(),
            label: "Asiakkaiden-suosikit",
            link: "/collections/asiakkaiden-suosikit",
        },
        {
            id: uuidv4(),
            label: "Löytöpiste",
            link: "/collections/loytopiste",
        },
        {
            id: uuidv4(),
            label: "Pääsiäinen",
            link: "/collections/paasiainen",
        },
        {
            id: uuidv4(),
            label: "Talvi",
            link: "/collections/talvi",
        },
        {
            id: uuidv4(),
            label: "Uutta käsitöihin, käsityökirjauutuudet",
            link: "/collections/uutta-kasitoihin",
        },
        {
            id: uuidv4(),
            label: "Kuvastot",
            link: "/pages/kuvastot",
        },
    ]
}

export const category = [
    benefits
]
