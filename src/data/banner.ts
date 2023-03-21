import {v4 as uuid} from 'uuid'
import { Link } from '../types/types';

interface Banner {
    customerServiceLink: Link[];
    freeDeliveryLink: Link[];
    subCompaniesLink: Link[];
}

export const banner: Banner = {
    customerServiceLink: [
        {
            id: uuid(),
            label: 'Myymälät',
            link: '/pages/myymalat'
        },
        {
            id: uuid(),
            label: 'Asiakaspalvelu',
            link: '/pages/ota-yhteytta'
        },
        {
            id: uuid(),
            label: 'Pöllöklubi',
            link: '/pages/polloklubi'
        },
    ],
    freeDeliveryLink: [
        {
            id: uuid(),
            label: 'Ilmaiset toimitukset yli 50€ tilauksiin',
            link: '/pages/ilmainen-toimitus'
        }
    ],
    subCompaniesLink: [
        {
            id: uuid(),
            label: 'Verkkokurssit',
            link: '/pages/suomalainenmonitaito'
        },
        {
            id: uuid(),
            label: 'Kirjakerho',
            link: '/pages/sskk'
        },
        {
            id: uuid(),
            label: 'Suomalainen Plus',
            link: '/pages/suomalainen-plus'
        },
    ]

}