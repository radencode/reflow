import { combineReducers } from 'redux';

import alert from 'reducers/alert';
import controls from 'reducers/controls';
import browse from 'reducers/browse';
import navigation from 'reducers/navigation';
import progress from 'reducers/progress';
import title from 'reducers/title';

export default combineReducers({
  alert,
  controls,
  browse,
  navigation,
  progress,
  title,
});
