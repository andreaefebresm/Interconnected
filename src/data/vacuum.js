import * as React from 'react';
import { ReactComponent as Vacuum1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Vacuum2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';

const vacuum = {
  title: 'SMART VACUUM CLEANER',
  description: 'Also called robot vacuums, they clean rooms automatically based on a virtual map.',
  items: 'Roomba, Roborock, Netbot',
  Icon: Vacuum,
  options: [
    {
      label: 'First Option',
      Svg: Vacuum1,
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
      label: 'Second Option',
      Svg: Vacuum2,
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
      label: 'Third Option',
      Svg: Vacuum2,
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

export default vacuum;
