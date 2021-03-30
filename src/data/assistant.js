import { ReactComponent as Assistant1 } from '../svg/assistant1/test.svg';
import { ReactComponent as Assistant2 } from '../svg/assistant2/test.svg';
import AssistantPng from '../components/Assistant';
import assistant1 from '../images/assistant/assistant1.jpg';
import assistant2 from '../images/assistant/assistant2.jpg';
import assistant3 from '../images/assistant/assistant3.jpg';

const tone = { title: 'Tone of voice', descr: 'Voice recordings are stored and analysed: artificial intelligence can tell if your tone of voice is sad, happy or angry. The emotions are also linked to the requests you make.' };
const voice = { title: 'Voice recognition', descr: 'Virtual assistants can recognise whose is the voice that is talking: some devices give the possibility to give names to users. The history of the voices gives an idea of who lives the house.' };
const query = { title: 'Query history', descr: 'Every interaction with the virtual assistant is recorded and stored. The history and the repetition of requests gives a pattern of your habits and preferred things.' };
const dist = { title: 'Distance from the device', descr: 'Artificial Intelligence can detect from the echo the distance from the device. Since the device is also capable of locating itself in the house, the company knows which room you use the most.' };

const assistant = {
  title: 'VOICE ASSISTANT',
  description: 'It can perform tasks or services for an individual based on commands or questions',
  items: 'Home pod, Google Home, Amazon Echo',
  Icon: AssistantPng,
  options: [
    {
      label: 'Voice Assistant, what is the weather like today?',
      Svg: Assistant1,
      prefix: 'test_svg',

      collectedData: [
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
            top: '30%',
            left: '23%',
          },
        },
        {
          label: query.title,
          description: query.descr,
          style: {
            left: '12%',
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
    {
      label: 'Voice Assistant, add White Wine to my list.',
      Svg: Assistant2,
      prefix: 'test_svg',

      collectedData: [
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
            top: '30%',
            left: '23%',
          },
        },
        {
          label: query.title,
          description: query.descr,
          style: {
            left: '12%',
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
    what: 'What is your mood when you express certain requests, who talks more with the device, what happens in your house. And this data is shared to your other devices.',
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
    cta: 'CAN I USE THE VIRTUAL ASSISTANT SAFELY?',
  },
};

export default assistant;
