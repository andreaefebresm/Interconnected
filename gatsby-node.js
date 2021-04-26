const path = require('path');

exports.createPages = function ({ graphql, actions: { createPage } }) {
  const devices = [

    'thermostat',
    'doorbell',
    'assistant',
    'vacuum',
    'bulb',
  ];

  devices.forEach((dev, index) => {
    createPage({
      path: dev,
      component: path.resolve('./src/components/start.js'),
      context: {
        index,
      },
    });
  });
};
