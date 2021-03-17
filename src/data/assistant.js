import * as React from 'react';
import { ReactComponent as Assistant1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Assistant2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import { ReactComponent as Assistant } from '../svg/assistant.svg';

const assistant = {
  title: 'VOICE ASSISTANT',
  description: 'It can perform tasks or services for an individual based on commands or questions',
  items: 'Home pod, Google Home, Amazon Echo',
  Icon: Assistant,
  options: [
    {
      label: 'assistant option 1',
      Svg: Assistant1,
      collectedData: [
        {
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
          id: '#test__ciccio_svg',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
          id: '#test__ciccio_svg',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          id: '#test__ciccio_svg',
        },
      ],
    },
    {
      label: 'assistant option 2',
      Svg: Assistant2,
      collectedData: [
        {
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
          id: '#test__ciccio_svg',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
          id: '#test__ciccio_svg',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          id: '#test__ciccio_svg',
        },
      ],
    },
    {
      label: 'assistant option 3',
      Svg: Assistant2,
      collectedData: [
        {
          label: 'Map of the house',
          description: 'PROXIMITY SENSORS COMBINED WITH ARTIFICIAL INTELLINGENCE* RECOGNISE OBSTACLES AS WALLS.\n'
            + 'USERS GIVE THE NAME OF EACH ROOM.',
          id: '#test__ciccio_svg',
        },
        {
          label: 'Map of the house',
          description: 'Some smart vacuum cleaners have cameras in them and take photos. These photos are sent to the '
            + 'company’s servers and an A.I. recognises if the object is a table. The photos are stored only for few seconds '
            + 'but the fact that you own such type of furniture remains. ',
          id: '#test__ciccio_svg',
        },
        {
          label: 'Map of the house',
          description: 'The vacuum robot analyses how many times it has to empty the bin and in which room the bin gets fuller.',
          id: '#test__ciccio_svg',
        },
      ],
    },
  ],

};

export default assistant;
