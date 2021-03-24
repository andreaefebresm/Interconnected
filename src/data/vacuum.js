import { ReactComponent as Vacuum1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Vacuum2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as Vacuum3 } from '../svg/vacuum3/test.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import vacuum1 from '../images/vacuum/vacuum1.jpg';
import vacuum2 from '../images/vacuum/vacuum2.jpg';
import vacuum3 from '../images/vacuum/vacuum3.jpg';

const map = { title: 'Map of the house', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const obstacle = { title: 'Obstacle recognition', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const dirty = { title: 'Dirtiness level', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const tone = { title: 'Tone of voice', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const voice = { title: 'Voice recognition', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const query = { title: 'Query history', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };
const dist = { title: 'Distance from the device', descr: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the.' };

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
            top: '56%',
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
    what: 'vacuum much you use your spaces in the house (map + dirtiness) how untidy you are',
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
    cta: 'can i use my Vacuum more safely?',
  },
};

export default vacuum;
