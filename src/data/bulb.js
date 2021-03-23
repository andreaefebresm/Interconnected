import { ReactComponent as Bulb1 } from '../svg/bulb1/test.svg';
import { ReactComponent as Bulb2 } from '../svg/bulb2/test.svg';
import { ReactComponent as Bulb3 } from '../svg/bulb3/test.svg';
import { ReactComponent as Bulb } from '../svg/bulb.svg';
import bulb1 from '../images/bulb/bulb1.jpg';
import bulb2 from '../images/bulb/bulb2.jpg';
import bulb3 from '../images/bulb/bulb3.jpg';

const bulb = {
  title: 'SMART BULB',
  description: 'Light can be controlled with just a few taps on smartphone, tablet and virtual assistants.',
  items: 'Wyze Bulb, Philips Hue, Sengled Smart Wi-Fi LED',
  Icon: Bulb,
  options: [
    {
      label: 'Change the color of the smart bulb',
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
      label: 'Turn on the light via app',
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
      label: 'Voice assistant, I am home',
      Svg: Bulb3,
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
    cta: 'can i use my Smart Bulbs more safely?',
  },
};

export default bulb;
