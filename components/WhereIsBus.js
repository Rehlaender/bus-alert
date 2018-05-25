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
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.waitingBus, 'asdfu');
  }

  render() {
    return (
        <View>
          <Text>
            lel -> waiting this guy {this.props.waitingBus.id - this.props.waitingBus.name}
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
