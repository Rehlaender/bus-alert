import React from 'react';

import store from '../todoStore';
import {
  Text,
  StyleSheet,
  View,
  Picker,
} from 'react-native';

export class TimeUntilBusArrives extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  returnStopWhereIAm() {
    const stops = this.props.stops;
    const stop = waitingBusId;
    const busObject = buses.filter(( bus ) => {
      return bus.id === busId;
    });
    return busObject;
  }

  calculateTimeUntilBusArrives() {

  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    let waitingBus = this.returnBusById(this.props.waitingBusId);
    // let waitingStop = this.returnStopById(this.props.waitingStopId);
    return (
        <View>
          <Text>
            :D
            asdfu -> waiting this guy {this.props.waitingBusId}
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
