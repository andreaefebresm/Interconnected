import { ReactComponent as Vacuum1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Vacuum2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as Vacuum3 } from '../svg/vacuum3/test.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import vacuum1 from '../images/vacuum/vacuum1.jpg';
import vacuum2 from '../images/vacuum/vacuum2.jpg';
import vacuum3 from '../images/vacuum/vacuum3.jpg';

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
          label: 'Map of yout house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
          id: '#test_svg__prova1',
          style: {
            left: '10%',
          },
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
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
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
          style: {
            left: '10%',
          },
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
          style: {
            top: '30%',
            left: '23%',
          },
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          style: {
            left: '12%',
          },
        },
      ],
    },
    {
      label: 'Voice Assistant, clean the Kitchen',
      Svg: Vacuum3,
      prefix: 'test_svg',

      collectedData: [
        {
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
        },
        {
          label: 'Obstacle recognition',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
        },
        {
          label: 'Dirtiness Level',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
        },
        {
          label: 'Tone of Voice',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          style: {
            left: '12%',
          },
        },
        {
          label: 'Query History',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          style: {
            left: '22%',
            top: '75%',
          },
        },
        {
          label: 'Voice Recognition',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          style: {
            left: '5%',
            top: '55%',
          },
        },
        {
          label: 'Distance from Device',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          style: {
            left: '10%',
            top: '90%',
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
