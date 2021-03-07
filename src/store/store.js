import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { schoolPeriodReducer } from './reducers/schoolPeriodReducer';
import { subjectReducer } from './reducers/subjectReducer';
import { uiReducer } from './reducers/uiReducer';

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  schoolPeriod: schoolPeriodReducer,
  subject: subjectReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export {store}