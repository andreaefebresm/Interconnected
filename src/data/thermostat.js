import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as Thermostat1 } from '../svg/thermostat1/test.svg';
import { ReactComponent as Thermostat2 } from '../svg/thermostat2/test.svg';
import { ReactComponent as Thermostat3 } from '../svg/thermostat3/test.svg';
import thermostat1 from '../images/thermostat/thermostat1.jpg';
import thermostat2 from '../images/thermostat/thermostat2.jpg';
import thermostat3 from '../images/thermostat/thermostat3.jpg';

const presence = { title: 'Presence in the house', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const rooms = { title: 'Rooms usage', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const tone = { title: 'Tone of voice', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const voice = { title: 'Voice recognition', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const query = { title: 'Query history', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const dist = { title: 'Distance from the device', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };

const thermostat = {
  title: 'SMART THERMOSTAT',
  description: 'The thermostats can be controlled remotly and they regulate the temperature by themselves.',
  items: 'Nest, Ecobee Smart Thermostat, Honeywell Home',
  Icon: Thermostat,
  options: [
    {
      label: 'Turn the temperature up.',
      Svg: Thermostat1,
      prefix: 'test_svg',

      collectedData: [
        {
          label: presence.title,
          description: presence.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: rooms.title,
          description: rooms.descr,
          style: {
            top: '30%',
            left: '21%',
          },
        },
      ],
    },
    {
      label: 'Temperature self-regulation mode.',
      Svg: Thermostat2,
      prefix: 'test_svg',

      collectedData: [
        {
          label: presence.title,
          description: presence.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: rooms.title,
          description: rooms.descr,
          style: {
            top: '30%',
            left: '21%',
          },
        },
      ],
    },
    {
      label: 'Voice assistant, make my thermostat warmer by 2 degrees',
      Svg: Thermostat3,
      prefix: 'test_svg',

      collectedData: [
        {
          label: presence.title,
          description: presence.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: rooms.title,
          description: rooms.descr,
          style: {
            top: '30%',
            left: '21%',
          },
        },
        {
          label: tone.title,
          description: tone.descr,
          style: {
            left: '10%',
          },
        },
        {
          label: dist.title,
          description: dist.descr,
          style: {
            top: '50%',
            left: '23%',
          },
        },
        {
          label: query.title,
          description: query.descr,
          style: {
            left: '5%',
            top: '70%',
          },
        },
        {
          label: voice.title,
          description: voice.descr,
          style: {
            left: '22%',
            top: '70%',
          },
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
