import { combineReducers } from 'redux';

import controls from './controls-reducer';
import title from './title-reducer';

export default combineReducers({
  controls: controls,
  title: title
});
