
import Root from '../navigations/Root'

const navigationReducer = (state , action) => {
	// console.log('reducer state', AppNavigator.router);
  const newState = Root.router.getStateForAction(action, state);
  return Root.router.getStateForAction(action, state);;
};

export default navigationReducer;