import { combineReducers } from 'redux';

import alert from 'reducers/alert';
import controls from 'reducers/controls';
import browse from 'reducers/browse';
import files from 'reducers/files';
import navigation from 'reducers/navigation';
import progress from 'reducers/progress';
import sort_animation from 'reducers/sort_animation';
import title from 'reducers/title';

export default combineReducers({
  alert,
  controls,
  browse,
  files,
  navigation,
  progress,
  sort_animation,
  title,
});
