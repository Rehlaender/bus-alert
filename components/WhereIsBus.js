import React from 'react';

import store from '../todoStore';
import {
  Text,
  StyleSheet,
  View,
  Picker,
} from 'react-native';

export class WhereIsBus extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      busNearStop: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.waitingBus, 'asdfu');
  }

  render() {
    return (
        <View>
          <Text>
            El camión {this.props.waitingBus.name } se encuentra cerca de la parada {}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
