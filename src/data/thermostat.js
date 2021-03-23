import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as Thermostat1, ReactComponent as Thermostat2 } from '../svg/vacuum1/test.svg';
import thermostat1 from '../images/thermostat/thermostat1.jpg';
import thermostat2 from '../images/thermostat/thermostat2.jpg';
import thermostat3 from '../images/thermostat/thermostat3.jpg';

const thermostat = {
  title: 'SMART THERMOSTAT',
  description: 'The thermostats can be controlled remotly and they regulate the temperature by themselves.',
  items: 'Nest, Ecobee Smart Thermostat, Honeywell Home',
  Icon: Thermostat,
  options: [
    {
      label: 'thermostat Option 1',
      Svg: Thermostat1,
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
      label: 'thermostat Option 2',
      Svg: Thermostat2,
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
      label: 'thermostat Option 3',
      Svg: Thermostat2,
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
    what: 'how much you use your spaces in the house (map + dirtiness) how untidy you are',
    links: [
      {
        href: 'https://www.theguardian.com/technology/2020/mar/08/how-to-stop-your-smart-home-spying-on-you-lightbulbs-doorbell-ring-google-assistant-alexa-privacy',
        text: thermostat1,
      },
      {
        href: 'https://www.newsweek.com/2019/11/01/privacy-internet-things-amazon-ring-google-nest-1467559.html',
        text: thermostat2,
      },
      {
        href: 'https://www.pcmag.com/news/turning-a-nest-smart-thermostat-into-a-data-stealing-spy-in-15-seconds',
        text: thermostat3,
      },
    ],
    cta: 'can i use my Smart Thermostat more safely?',
  },

};

export default thermostat;
