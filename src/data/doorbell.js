import { ReactComponent as Doorbell1 } from '../svg/doorbell1/test.svg';
import { ReactComponent as Doorbell2 } from '../svg/doorbell2/test.svg';
import { ReactComponent as Doorbell3 } from '../svg/doorbell3/test.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import ring1 from '../images/ring/ring1.jpg';
import ring2 from '../images/ring/ring2.jpg';
import ring3 from '../images/ring/ring3.jpg';

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
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
        },
      ],
    },
    {
      label: 'Activate the motion sensor by passing in front of the doorbell.',
      Svg: Doorbell2,
      prefix: 'test_svg',

      collectedData: [
        {
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
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
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
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
