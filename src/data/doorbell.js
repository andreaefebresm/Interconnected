import { ReactComponent as Doorbell1 } from '../svg/doorbell1/test.svg';
import { ReactComponent as Doorbell2 } from '../svg/doorbell2/test.svg';
import { ReactComponent as Doorbell3 } from '../svg/doorbell3/test.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import ring1 from '../images/ring/ring1.jpg';
import ring2 from '../images/ring/ring2.jpg';
import ring3 from '../images/ring/ring3.jpg';

const facial = { title: 'Facial expression', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const presence = { title: 'Presence in the house', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const faceRec = { title: 'Face recognition', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const outside = { title: 'Recording of the outside', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const tone = { title: 'Tone of voice', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const voice = { title: 'Voice recognition', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const query = { title: 'Query history', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const dist = { title: 'Distance from the device', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };

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
          label: presence.title,
          description: presence.descr,
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
          label: presence.title,
          description: presence.descr,
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
          label: presence.title,
          description: presence.descr,
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
            top: '35%',
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
            top: '68%',
            left: '22%',
          },
        },
        {
          label: query.title,
          description: query.descr,
          style: {
            left: '0.5%',
            top: '32%',
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
    what: 'doorbel how much you use your spaces in the house (map + dirtiness) how untidy you are',
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
    cta: 'can i use my Smart Doorbell more safely?',
  },
};

export default doorbell;
