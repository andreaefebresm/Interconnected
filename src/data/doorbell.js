import { ReactComponent as Doorbell1 } from '../svg/doorbell1/test.svg';
import { ReactComponent as Doorbell2 } from '../svg/doorbell2/test.svg';
import { ReactComponent as Doorbell3 } from '../svg/doorbell3/test.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import ring1 from '../images/ring/ring1.jpg';
import ring2 from '../images/ring/ring2.jpg';
import ring3 from '../images/ring/ring3.jpg';

import {
  tone, voice, query, dist, facial, faceRec, outside, presenceDoor,
} from './finalCard';

const doorbell = {
  title: 'SMART DOORBELL',
  description: 'Notifies the smartphone of the home owner when a visitor arrives at the door.',
  items: 'Ring Doorbell, Dingling Xiaomi, Xiaomi Mijia',
  Icon: DoorBell,
  options: [
    {
      label: 'Ring the doorbell',
      Svg: Doorbell1,
      prefix: 'test_svg',

      collectedData: [
        {
          label: facial.title,
          description: facial.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: presenceDoor.title,
          description: presenceDoor.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: faceRec.title,
          description: faceRec.descr,
          style: {
            left: '12%',
          },
        },
        {
          label: outside.title,
          description: outside.descr,
          style: {
            left: '22%',
            top: '70%',
          },
        },
      ],
    },
    {
      label: 'Activate the motion sensor by passing in front of the doorbell.',
      Svg: Doorbell2,
      prefix: 'test_svg',

      collectedData: [
        {
          label: facial.title,
          description: facial.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: presenceDoor.title,
          description: presenceDoor.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: faceRec.title,
          description: faceRec.descr,
          style: {
            left: '12%',
          },
        },
        {
          label: outside.title,
          description: outside.descr,
          style: {
            left: '22%',
            top: '70%',
          },
        },
      ],
    },
    {
      label: 'Voice assistant, \n'
        + 'talk to front door.',
      Svg: Doorbell3,
      prefix: 'test_svg',

      collectedData: [
        {
          label: facial.title,
          description: facial.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: presenceDoor.title,
          description: presenceDoor.descr,
          style: {
            top: '20%',
            left: '23%',
          },
        },
        {
          label: faceRec.title,
          description: faceRec.descr,
          style: {
            left: '12%',
            top: '36%',
          },
        },
        {
          label: outside.title,
          description: outside.descr,
          style: {
            left: '23%',
            top: '48%',
          },
        },
        {
          label: tone.title,
          description: tone.descr,
          style: {
            left: '10%',
            top: '55%',
          },
        },
        {
          label: dist.title,
          description: dist.descr,
          style: {
            top: '70%',
            left: '22%',
          },
        },
        {
          label: query.title,
          description: query.descr,
          style: {
            left: '0.5%',
            top: '34%',
          },
        },
        {
          label: voice.title,
          description: voice.descr,
          style: {
            left: '5%',
            top: '75%',
          },
        },
      ],
    },
  ],
  end: {
    what: 'Who are your visitors, what is their mood and who passes in front of your door. And this data is shared to your other devices.',
    links: [
      {
        href: 'https://www.eff.org/deeplinks/2020/01/ring-doorbell-app-packed-third-party-trackers',
        text: ring1,
      },
      {
        href: 'https://www.privacyinternational.org/long-read/3971/one-ring-watch-them-all',
        text: ring2,
      },
      {
        href: 'https://www.thezebra.com/resources/home/doorbell-camera-survey/',
        text: ring3,
      },
    ],
    cta: 'CAN I USE SMART DOORBELLS SAFELY?',
    device: 'doorbell',
  },
};

export default doorbell;
