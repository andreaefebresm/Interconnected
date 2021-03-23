import { ReactComponent as Assistant1 } from '../svg/assistant1/test.svg';
import { ReactComponent as Assistant2 } from '../svg/assistant2/test.svg';
import { ReactComponent as Assistant } from '../svg/assistant.svg';
import assistant1 from '../images/assistant/assistant1.jpg';
import assistant2 from '../images/assistant/assistant2.jpg';
import assistant3 from '../images/assistant/assistant3.jpg';

const assistant = {
  title: 'VOICE ASSISTANT',
  description: 'It can perform tasks or services for an individual based on commands or questions',
  items: 'Home pod, Google Home, Amazon Echo',
  Icon: Assistant,
  options: [
    {
      label: 'Voice Assistant, what is the weather like today?',
      Svg: Assistant1,
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
      label: 'Voice Assistant, add White Wine to my list.',
      Svg: Assistant2,
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
      label: 'assistant option 3',
      Svg: Assistant2,
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
    what: 'assistant much you use your spaces in the house (map + dirtiness) how untidy you are',
    links: [
      {
        href: 'https://www.theverge.com/2019/7/11/20690020/google-assistant-home-human-contractors-listening-recordings-vrt-nws',
        text: assistant1,
      },
      {
        href: 'https://money.cnn.com/2018/05/24/technology/alexa-secret-recording/index.html',
        text: assistant2,
      },
      {
        href: 'https://www.wired.com/story/whos-listening-talk-google-assistant/',
        text: assistant3,
      },
    ],
    cta: 'can i use my Voice Assistant more safely?',
  },
};

export default assistant;
