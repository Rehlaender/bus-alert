import { createStore } from 'redux';

import Buses from './constants/Buses';
import Stops from './constants/Stops';
import Routes from './constants/Routes';

const defaultState = {
  todos: [
    {
        task: 'initial todo in store',
    },
  ],
  isToggle: true,
  actualTime: '00:00:00',
  waitingBus: {
    id: 10,
    name: "el 10"
  },
  waitingBusId: 10,
  waitingStopId: 10,
  waitingStop: {
      id: 10,
      lat: "10",
      lon: "10",
      name: "la parada 10"
  },
  buses: [
    ...Buses
  ],
  stops: [
    ...Stops
  ],
  routes: [
    ...Routes
  ],
}

function todoStore(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_WAITING_BUS_ID':
      console.log(action.bus, 'dispatch id');
      return Object.assign({}, state, {
        waitingBusId: action.bus
      });
      break;
    case 'CHANGE_WAITING_STOP_ID':
      console.log(action.stop, 'dispatch id');
      return Object.assign({}, state, {
        waitingStopId: action.stop
      });
      break;
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat([{
          task: action.task
        }]),
      });
      break;
    case 'TIC_TIMER':
      return Object.assign({}, state, {
        actualTime: action.now
      });
      break;
    case 'TOGGLE_TOGGLER':
      return Object.assign({}, state, {
        isToggle: !state.isToggle
      });
      break;
    default:
      return state;
  }
}

export default createStore(todoStore);
