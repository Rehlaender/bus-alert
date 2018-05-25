import React from 'react';

import store from '../todoStore';
import {
  Text,
  StyleSheet,
  View,
  Picker,
} from 'react-native';

export class ChangeBus extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedBus: {
        id: 10,
        name: 'ejk',
      },
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState, 'asdfu did');
  }

  componentWillUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState, 'asdfu will');
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>Camión:</Text>
        <Picker
          selectedValue={this.props.waitingBusId}
          style={{ height: 50, width: 300 }}
          onValueChange={(bus, itemIndex) => store.dispatch({type: 'CHANGE_WAITING_BUS_ID', bus})}>
              {
                this.props.buses.map((bus) => <Picker.Item key={bus.id} label={bus.name} value={bus.id} />)
              }
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: 'green',
    flex: 2,
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
