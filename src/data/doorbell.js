import { ReactComponent as Doorbell1 } from '../svg/vacuum1/test.svg';
import { ReactComponent as Doorbell2 } from '../svg/vacuum2/test.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';

const doorbell = {
  title: 'SMART DOORBELL',
  description: 'Notifies the smartphone of the home owner when a visitor arrives at the door.',
  items: 'Ring Doorbell, Dingling Xiaomi, Xiaomi Mijia',
  Icon: DoorBell,
  options: [
    {
      label: 'doorbell option 1',
      Svg: Doorbell1,
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
      label: 'doorbell option 2',
      Svg: Doorbell2,
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
      label: 'doorbell option 3',
      Svg: Doorbell1,
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

};

export default doorbell;
