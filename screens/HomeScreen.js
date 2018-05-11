import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker
} from 'react-native';

import { WebBrowser } from 'expo';

import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

import Buses from '../constants/Buses';
import Stops from '../constants/Stops';

import Colors from '../constants/Colors';

const now = new Date();

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actualTime: `${now.getHours()}:${now.getMinutes()}`,
      selectedBus: {},
      selectedStop: {}
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    console.log(this.state.actualTime);
  }

  render() {
    return (
      <View style={[styles.container, styles.mainBackground]}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          {/*TITLES COMPONENT*/}
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Time: {this.state.actualTime}</Text>
            <Text style={styles.getStartedText}>waiting For: { this.state.selectedBus.name }</Text>
            <Text style={styles.getStartedText}>You are in: { this.state.selectedStop.name }</Text>
          </View>

          {/*BUS ANIMATION COMPONENT*/}
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          {/*PIKCERS CONTAINER*/}
          <View style={styles.getStartedContainer}>
            <Picker
              selectedValue={this.state.selectedBus}
              style={{ height: 50, width: 300 }}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedBus: itemValue})}>
              {
                Buses.map((bus) => <Picker.Item key={bus.id} label={bus.name} value={bus} />)
              }
            </Picker>

            <Picker
              selectedValue={this.state.selectedStop}
              style={{ height: 50, width: 300 }}
              onValueChange={(itemValue, itemIndex) => {console.log(itemValue); this.setState({selectedStop: itemValue});}}>
              {
                Stops.map((stop) => <Picker.Item key={stop.id} label={stop.name} value={stop} />)
              }
            </Picker>
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
