import { combineReducers } from 'redux';

import alert from './alert';
import controls from './controls';
import navigation from './navigation';
import progress from './progress';
import title from './title';

export default combineReducers({
  alert,
  controls,
  navigation,
  progress,
  title,
});
