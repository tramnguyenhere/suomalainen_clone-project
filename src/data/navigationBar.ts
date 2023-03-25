import { v4 as uuidv4 } from 'uuid'
import { Link } from '../types/types'


export const navigationBar: Link[] = [
    {
        id: uuidv4(),
        label: 'Kampanjat',
        link: '/pages/edut-ja-kampanjat'
    },
    {
        id: uuidv4(),
        label: 'Tilaa ennakkoon',
        link: '/collections/kuumimmat-tulossa-olevat-kirjauutuudet'
    },
    {
        id: uuidv4(),
        label: 'Myydyimmät',
        link: '/pages/myydyimmat-kirjat-mita-suomalaiset-lukevat'
    },
    {
        id: uuidv4(),
        label: 'Suomalaisen puodit',
        link: '/pages/puodit'
    },
    {
        id: uuidv4(),
        label: 'Brändit',
        link: '/pages/brandit'
    },
    {
        id: uuidv4(),
        label: 'Löytöpiste',
        link: '/collections/loytopiste'
    },
]