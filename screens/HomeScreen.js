import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  Button
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

import { Clock } from '../components/Clock';
import { ChangeBus } from '../components/ChangeBus';

import { ChangeRoute } from '../components/ChangeRoute';
import { ChangeStop } from '../components/ChangeStop';
import { WhereIsBus } from '../components/WhereIsBus';

import store from '../todoStore';

import Buses from '../constants/Buses';
import Stops from '../constants/Stops';

import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });

    this.toggler = this.toggler.bind(this);
    this.returnBusById = this.returnBusById.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    // console.log(this.state.waitingBus.name, 'leeel');
  }

  toggler() {
    store.dispatch({type: 'TOGGLE_TOGGLER'});
  }

  returnBusById() {
    const buses = this.state.buses;
    const busId = this.state.waitingBusId;
    const busObject = buses.filter(( bus ) => {
      return bus.id === busId;
    });
    return busObject;
  }

  // changeById(waitingStopId) {
  //   const stops = this.props.stops;
  //   const stopId = waitingStopId;
  //   const stopObject = stops.filter(( stop ) => {
  //     return stop.id === stopId;
  //   });
  //   return stopObject;
  // }

  render() {
    return (
      <View style={[styles.container, styles.mainBackground]}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Clock />
          <View>
            { this.state.buses.length > 0 ? <ChangeBus waitingBusId={this.state.waitingBusId} buses={this.state.buses}/> : ''}
            { this.state.routes.length > 0 ? <ChangeRoute waitingRouteId={this.state.waitingRouteId} routes={this.state.routes}/> : ''}
            { this.state.stops.length > 0 ? <ChangeStop waitingStopId={this.state.waitingStopId} stops={this.state.stops}/> : ''}
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: Colors.lightYellow,
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  changeBusContainer: {
    bottom: 0,
    position: 'absolute',
    left: 0,
    width: '50%'
  },
  changeStopContainer: {
    bottom: 0,
    position: 'absolute',
    right: 0,
    width: '50%'
  },
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: Colors.hardBlue,
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
