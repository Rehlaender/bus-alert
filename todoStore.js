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
  actualHours: 0,
  actualMinutes: 0,
  actualSeconds: 0,
  waitingBus: {
    ...Buses[0]
  },
  waitingBusId: 1,
  waitingStopId: 1,
  waitingStop: {
      ...Stops[0]
  },
  waitingRouteId: 1,
  waitingRoute: {
      ...Routes[0]
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
  nearestStop: {
    ...Stops[0]
  }
}

function returnBusById(buses, busId) {
  const busObject = buses.filter(( bus ) => {
    return bus.id === busId;
  });
  return busObject[0];
}

function returnRouteById(routes, routeId) {
  const routeObject = routes.filter(( route ) => {
    return route.id === routeId;
  });
  return routeObject[0];
}

function returnStopById(stops, stopId) {
  const stopObject = stops.filter(( stop ) => {
    return stop.id === stopId;
  });
  return stopObject[0];
}

function returnRoutesByBusId(busStops, busId) {
  const stops = busStops.filter(( stop ) => {
    return stop.busId === busId;
  });
  return stops;
}

function returnStopNearBusAccordingTime(stops, actualStop, actualRoute, actualBus, time) {
  let nearestStopId = actualRoute.stops.filter(stop => {
    return toString(stop.time.hour) === toString(time.hours);
  });

  let thisStop = stops.filter(stop => {
    return stop.id === nearestStopId[0].stop;
  });

  let nearestStop = thisStop[0];
  console.log(nearestStop.name,'nearestStop');
  return nearestStop;
}

function todoStore(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_WAITING_BUS_ID':
      const waitingBus = returnBusById(state.buses, action.bus);
      return Object.assign({}, state, {
        waitingBusId: action.bus,
        waitingBus
      });
      break;
    case 'CHANGE_WAITING_STOP_ID':
      const waitingStop = returnStopById(state.stops, action.stop);
      return Object.assign({}, state, {
        waitingStopId: action.stop,
        waitingStop
      });
      break;
    case 'CHANGE_WAITING_ROUTE_ID':
      const waitingRoute = returnRouteById(state.routes, action.route);
      return Object.assign({}, state, {
        waitingRouteId: action.route,
        waitingRoute
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
      const nearestStop = returnStopNearBusAccordingTime(state.stops, state.waitingStop, state.waitingRoute, state.waitingBus, action.now);
      return Object.assign({}, state, {
        actualTime: action.now.actualTime,
        actualHours: action.now.hours,
        actualMinutes: action.now.minutes,
        actualSeconds: action.now.seconds,
        nearestStop
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
