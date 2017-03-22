import { combineReducers } from 'redux';

import controls from './controls';
import navigation from './navigation';
import title from './title';
import progress from './progress';

export default combineReducers({
  controls,
  navigation,
  title,
  progress,
});
