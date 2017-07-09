import { combineReducers } from 'redux';

import alert from 'reducers/alert';
import attributes from 'reducers/attributes';
import attributeOptions from 'reducers/attributeOptions';
import controls from 'reducers/controls';
import browse from 'reducers/browse';
import files from 'reducers/files';
import navigation from 'reducers/navigation';
import progress from 'reducers/progress';
import sortAnimation from 'reducers/sortAnimation';
import title from 'reducers/title';

export default combineReducers({
  alert,
  attributes,
  controls,
  browse,
  files,
  navigation,
  progress,
  sortAnimation,
  title,
});
