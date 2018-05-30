//Redux modules
import { combineReducers } from 'redux';

//Shared
import alert from 'shared/notifications/alert/reducer';
import progress from 'shared/progress/reducer';

//Configure Containers
import attributes from 'screens/rename/views/configure/containers/attributes/reducer';
import files from 'screens/rename/views/configure/containers/files/reducer';
import options from 'screens/rename/views/configure/containers/options/reducer';
import tags from 'screens/rename/views/configure/containers/tags/reducer';

//Combine reducers
const reducers = combineReducers({
	alert,
	attributes,
	files,
	options,
	progress,
	tags,
});

export default reducers;
