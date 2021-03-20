import { ReactComponent as Bulb1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Bulb2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as Bulb } from '../svg/bulb.svg';

const bulb = {
  title: 'SMART BULB',
  description: 'Light can be controlled with just a few taps on smartphone, tablet and virtual assistants.',
  items: 'Wyze Bulb, Philips Hue, Sengled Smart Wi-Fi LED',
  Icon: Bulb,
  options: [
    {
      label: 'bulb option 1',
      Svg: Bulb1,
      prefix: 'test_svg',
      collectedData: [
        {
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
          id: 'uno',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
          id: 'due',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          id: 'tre',
        },
      ],
    },
    {
      label: 'bulb option 2',
      Svg: Bulb2,
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
      label: 'bulb option 3',
      Svg: Bulb1,
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
    what: 'bulb much you use your spaces in the house (map + dirtiness) how untidy you are',
    links: [
      {
        href: 'http://ww.....',
        text: 'A',
      },
      {
        href: 'http://ww.....',
        text: 'B',
      },
      {
        href: 'http://ww.....',
        text: 'A',
      },
    ],
    cta: 'can i use my Smart Bulbs more safely?',
  },
};

export default bulb;
