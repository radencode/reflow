//Redux modules
import { combineReducers } from 'redux';

//Reducers
import progress from 'progress/reducer';
import configure from 'modals/configure/reducer';

//Combine reducers
const reducers = combineReducers({
	progress: progress,
	configure: configure,
});

export default reducers;
