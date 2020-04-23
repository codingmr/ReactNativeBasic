import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { Colors, Metrics } from '../theme';

const TabBarIcon = (props) => {
  TabBarIcon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    focused: PropTypes.any,
  };
  return (
    <Ionicons
      name={props.name}
      size={props.size}
      style={Metrics.reverseBottomMargin}
      color={props.focused ? Colors.primary : Colors.inactive}
    />
  );
};

export default TabBarIcon;
