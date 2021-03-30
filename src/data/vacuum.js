import { ReactComponent as Vacuum1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Vacuum2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as Vacuum3 } from '../svg/vacuum3/test.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import vacuum1 from '../images/vacuum/vacuum1.jpg';
import vacuum2 from '../images/vacuum/vacuum2.jpg';
import vacuum3 from '../images/vacuum/vacuum3.jpg';

const map = { title: 'Map of the house', descr: 'Proximity sensors combined with artificial intelligence recognise obstacles as walls. Users give the name to each room and the map is created.' };
const obstacle = { title: 'Obstacle recognition', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the company’s servers and an A.I. recognises the object shape. The photos are stored only for few seconds but the fact that you own such type of furniture remains.' };
const dirty = { title: 'Dirtiness level', descr: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets full faster. The history of emptying the bin gives an idea of which room is used the most.' };
const tone = { title: 'Tone of voice', descr: 'Voice recordings are stored and analysed: artificial intelligence can tell if your tone of voice is sad, happy or angry. The emotions are also linked to the requests you make.' };
const voice = { title: 'Voice recognition', descr: 'Virtual assistants can recognise whose is the voice that is talking: some devices give the possibility to give names to users. The history of the voices gives an idea of who lives the house.' };
const query = { title: 'Query history', descr: 'Every interaction with the virtual assistant is recorded and stored. The history and the repetition of requests gives a pattern of your habits and preferred things.' };
const dist = { title: 'Distance from the device', descr: 'Artificial Intelligence can detect from the echo the distance from the device. Since the device is also capable of locating itself in the house, the company knows which room you use the most.' };

const vacuum = {
  title: 'SMART VACUUM CLEANER',
  description: 'Also called robot vacuums, they clean rooms automatically based on a virtual map.',
  items: 'Roomba, Roborock, Netbot',
  Icon: Vacuum,
  options: [
    {
      label: 'Vacuum robot does his automated routine.',
      Svg: Vacuum1,
      prefix: 'test_svg',
      collectedData: [
        {
          label: map.title,
          description: map.descr,
          id: '#test_svg__prova1',
          style: {
            left: '10%',
          },
        },
        {
          label: obstacle.title,
          description: obstacle.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: dirty.title,
          description: dirty.descr,
          style: {
            left: '12%',
          },
        },
      ],
    },
    {
      label: 'Ask the vacuum robot to clean the kitchen.',
      Svg: Vacuum2,
      prefix: 'test_svg',
      collectedData: [
        {
          label: map.title,
          description: map.descr,
          id: '#test_svg__prova1',
          style: {
            left: '10%',
          },
        },
        {
          label: obstacle.title,
          description: obstacle.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: dirty.title,
          description: dirty.descr,
          style: {
            left: '12%',
          },
        },
      ],
    },
    {
      label: 'Voice Assistant, clean the kitchen',
      Svg: Vacuum3,
      prefix: 'test_svg',

      collectedData: [
        {
          label: map.title,
          description: map.descr,
          id: '#test_svg__prova1',
          style: {
            left: '12%',
            top: '10%',
          },
        },
        {
          label: obstacle.title,
          description: obstacle.descr,
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: dirty.title,
          description: dirty.descr,
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
            top: '50%',
          },
        },
        {
          label: dist.title,
          description: dist.descr,
          style: {
            left: '10%',
            top: '73%',
          },
        },
      ],
    },
  ],
  end: {
    what: 'What is your furniture and which room is more used. And this data is shared to your other devices.',
    links: [
      {
        href: 'https://www.nytimes.com/2017/07/25/technology/roomba-irobot-data-privacy.html',
        text: vacuum1,
      },
      {
        href: 'https://www.theguardian.com/technology/2017/jul/25/roomba-maker-could-share-maps-users-homes-google-amazon-apple-irobot-robot-vacuum',
        text: vacuum2,
      },
      {
        href: 'https://futurism.com/the-byte/roomba-i7-maps-house',
        text: vacuum3,
      },
    ],
    cta: 'CAN I USE SMART VACUUMS SAFELY?',
    device: 'vacuum',
  },
};

export default vacuum;
