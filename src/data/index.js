import * as React from 'react';
import { ReactComponent as Thermostat } from '../svg/thermosta.svg';
import { ReactComponent as DoorBell } from '../svg/doorbell.svg';
import { ReactComponent as Assistant } from '../svg/assistant.svg';
import { ReactComponent as Vacuum } from '../svg/vacuum.svg';
import { ReactComponent as Bulb } from '../svg/bulb.svg';
import { ReactComponent as Vacuum1 } from '../svg/vacuum1/test.svg';
import thermostat from './thermostat';
import vacuum from './vacuum';

export default [
  thermostat,
  {
    title: 'SMART DOORBELL',
    description: 'Notifies the smartphone of the home owner when a visitor arrives at the door.',
    items: 'Ring Doorbell, Dingling Xiaomi, Xiaomi Mijia',
    icon: <DoorBell style={{ height: '15vh' }} className="mx-auto w-100" />,
  },
  {
    title: 'VOICE ASSISTANT',
    description: 'It can perform tasks or services for an individual based on commands or questions',
    items: 'Home pod, Google Home, Amazon Echo',
    icon: <Assistant style={{ height: '15vh' }} className="mx-auto w-100" />,
  },
  vacuum,
  {
    title: 'SMART BULB',
    description: 'Light can be controlled with just a few taps on smartphone, tablet and virtual assistants.',
    items: 'Wyze Bulb, Philips Hue, Sengled Smart Wi-Fi LED',
    icon: <Bulb style={{ height: '15vh' }} className="mx-auto w-100" />,
  },
];
