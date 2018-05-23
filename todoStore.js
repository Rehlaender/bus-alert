import { createStore } from 'redux';

const defaultState = {
  todos: [
    {
        task: 'initial todo in store',
    },
  ],
  isToggle: true,
  actualTime: '00:00:00'
}

function todoStore(state = defaultState, action) {
  switch (action.type) {
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
