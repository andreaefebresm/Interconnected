import * as React from 'react';
import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as Thermostat1, ReactComponent as Thermostat2 } from '../svg/vacuum1/test.svg';

const thermostat = {
  title: 'SMART THERMOSTAT',
  description: 'The thermostats can be controlled remotly and they regulate the temperature by themselves.',
  items: 'Nest, Ecobee Smart Thermostat, Honeywell Home',
  icon: <Thermostat style={{ height: '15vh' }} className="mx-auto w-100" />,
  options: [
    {
      label: 'thermostat Option 1',
      Svg: Thermostat1,
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
      label: 'thermostat Option 2',
      Svg: Thermostat2,
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
      label: 'thermostat Option 3',
      Svg: Thermostat2,
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

export default thermostat;