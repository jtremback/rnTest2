// import { default as React, Text } from 'react-native'
// // import nuclear from 'nuclear-js'

// export default React.createClass({
//   render() {
//     return <Text>Shithammer</Text>;
//   }
// })

'use strict';

var React = require('react-native');
var Text = React.Text;

// import nuclear from 'nuclear-js'

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      Text,
      null,
      'Release the Crackin\''
    );
  }
});