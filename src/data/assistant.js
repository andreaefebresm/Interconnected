import { ReactComponent as Assistant1 } from '../svg/assistant1/test.svg';
import { ReactComponent as Assistant2 } from '../svg/assistant2/test.svg';
import { ReactComponent as Vacuum3 } from '../svg/vacuum3/test.svg';

import AssistantPng from '../components/Assistant';
import assistant1 from '../images/assistant/assistant1.jpg';
import assistant2 from '../images/assistant/assistant2.jpg';
import assistant3 from '../images/assistant/assistant3.jpg';

import {
  tone, voice, query, dist, map, obstacle, dirty,
} from './finalCard';

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
    device: 'assistant',
  },
};

export default assistant;
