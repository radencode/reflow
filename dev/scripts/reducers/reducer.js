import { combineReducers } from 'redux';

import controls from './controls';
import navigation from './navigation';
import title from './title';

export default combineReducers({
  controls: controls,
  navigation: navigation,
  title: title
});
