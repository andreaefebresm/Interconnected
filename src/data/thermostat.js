import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as Thermostat1 } from '../svg/thermostat1/test.svg';
import { ReactComponent as Thermostat2 } from '../svg/thermostat2/test.svg';
import { ReactComponent as Thermostat3 } from '../svg/thermostat3/test.svg';
import thermostat1 from '../images/thermostat/thermostat1.jpg';
import thermostat2 from '../images/thermostat/thermostat2.jpg';
import thermostat3 from '../images/thermostat/thermostat3.jpg';

const presence = { title: 'Presence in the house', descr: 'Smart thermostats are able to self-regulate themselves based on your presence in the house. Therefore, the history of temperature and your preferences creates a pattern of your habits.' };
const rooms = { title: 'Rooms usage', descr: 'The temperature preference in certain rooms is registered to self-regulate the thermostat. The habits of the people inside the house are stored.' };
const tone = { title: 'Tone of voice', descr: 'Voice recordings are stored and analysed: artificial intelligence can tell if your tone of voice is sad, happy or angry. The emotions are also linked to the requests you make.' };
const voice = { title: 'Voice recognition', descr: 'Virtual assistants can recognise whose is the voice that is talking: some devices give the possibility to give names to users. The history of the voices gives an idea of who lives the house.' };
const query = { title: 'Query history', descr: 'Every interaction with the virtual assistant is recorded and stored. The history and the repetition of requests gives a pattern of your habits and preferred things.' };
const dist = { title: 'Distance from the device', descr: 'Artificial Intelligence can detect from the echo the distance from the device. Since the device is also capable of locating itself in the house, the company knows which room you use the most.' };

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
    what: 'Your habits in the house, how long do you stay in the house and how often you go out. You can read more in the articles below.',
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
    cta: 'Can I use my smart thermostat safely?',
  },

};

export default thermostat;
