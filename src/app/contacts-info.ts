import {ContactsInfo} from './contacts-info-interface';

export const CONTACTS_INFO: ContactsInfo [] = [
  {
    image: 'assets/images/fist.svg',
    header: 'Зіткнулися з корупцією?',
    description: 'Пишіть нам',
    contact: 'hello@thedigital.gov.ua'
  },
  {
    image: 'assets/images/msg.svg',
    header: 'Напишіть у чат-бот',
    description: 'Оберіть месенджер',
    socialNetworksInfo: [
      {
        src: 'assets/images/viber.svg',
        alt: 'viber'
      },
      {
        src: 'assets/images/telegram.svg',
        alt: 'telegram'
      },
      {
        src: 'assets/images/facebook.svg',
        alt: 'facebook'
      }
    ]
  },
  {
    image: 'assets/images/phone.svg',
    header: 'Зателефонуйте на гарячу лінію',
    description: 'Працює з 09:00 до 18:00',
    contact: '+38 097 162 85 29'
  },
];
