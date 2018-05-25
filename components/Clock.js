import React from 'react';

import store from '../todoStore';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

export class Clock extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });

    this.ticker = this.ticker.bind(this);
    this.getNowDate = this.getNowDate.bind(this);
  }

  componentWillUnmount() {
    store.unsubscribe();
  }

  getNowDate() {
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const nowSeconds = now.getSeconds();
    const newer = {
        hours: nowHours,
        minutes: nowMinutes,
        seconds: nowSeconds,
        actualTime: `${nowHours}:${nowMinutes}:${nowSeconds}`
    };
    return newer;
  }

  ticker() {
    setInterval(() => {
      const now = this.getNowDate();
      store.dispatch({type: 'TIC_TIMER', now});
    }, 1000);
  }

  componentDidMount() {
    this.ticker();
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.actualTime}
        </Text>
      </View>
    );
  }
}
