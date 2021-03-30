import { ReactComponent as Bulb1 } from '../svg/bulb1/test.svg';
import { ReactComponent as Bulb2 } from '../svg/bulb2/test.svg';
import { ReactComponent as Bulb3 } from '../svg/bulb3/test.svg';
import BulbPng from '../components/Bulb';
import bulb1 from '../images/bulb/bulb1.jpg';
import bulb2 from '../images/bulb/bulb2.jpg';
import bulb3 from '../images/bulb/bulb3.jpg';

import {
  tone, voice, query, dist, people, presence, rooms,
} from './finalCard';

const bulb = {
  title: 'SMART BULB',
  description: 'Light can be controlled with just a few taps on smartphone, tablet and virtual assistants.',
  items: 'Wyze Bulb, Philips Hue, Sengled Smart Wi-Fi LED',
  Icon: BulbPng,
  options: [
    {
      label: 'Change the color of the smart bulb',
      Svg: Bulb1,
      prefix: 'test_svg',
      collectedData: [
        {
          label: people.title,
          description: people.descr,
          id: '#test_svg__prova1',
          style: {
            left: '10%',
          },
        },
        {
          label: presence.title,
          description: presence.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: rooms.title,
          description: rooms.descr,
          style: {
            left: '12%',
          },
        },
      ],
    },
    {
      label: 'Turn on the light via app',
      Svg: Bulb2,
      collectedData: [
        {
          label: people.title,
          description: people.descr,
          id: '#test_svg__prova1',
          style: {
            left: '10%',
          },
        },
        {
          label: presence.title,
          description: presence.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: rooms.title,
          description: rooms.descr,
          style: {
            left: '12%',
          },
        },
      ],
    },
    {
      label: 'Voice assistant, I am home',
      Svg: Bulb3,
      collectedData: [
        {
          label: people.title,
          description: people.descr,
          id: '#test_svg__prova1',
          style: {
            left: '12%',
            top: '10%',
          },
        },
        {
          label: presence.title,
          description: presence.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: rooms.title,
          description: rooms.descr,
          style: {
            left: '12%',
          },
        },
        {
          label: tone.title,
          description: tone.descr,
          style: {
            left: '0.5%',
            top: '20%',
          },
        },
        {
          label: query.title,
          description: query.descr,
          style: {
            left: '22%',
            top: '70%',
          },
        },
        {
          label: voice.title,
          description: voice.descr,
          style: {
            left: '1%',
            top: '53%',
          },
        },
        {
          label: dist.title,
          description: dist.descr,
          style: {
            left: '10%',
            top: '75%',
          },
        },
      ],
    },
  ],
  end: {
    what: 'If you are home, how often and which rooms you use the most. And this data is shared to your other devices.',
    links: [
      {
        href: 'https://medium.com/syncedreview/can-a-smart-light-bulb-steal-your-personal-data-80937fa27ae0',
        text: bulb1,
      },
      {
        href: 'https://www.cbsnews.com/news/are-smart-light-bulbs-a-security-risk/',
        text: bulb2,
      },
      {
        href: 'https://www.techrepublic.com/article/report-smart-bulbs-have-a-major-security-problem/',
        text: bulb3,
      },
    ],
    cta: 'CAN I USE SMART BULBS SAFELY?',
    device: 'bulb',
  },
};

export default bulb;
