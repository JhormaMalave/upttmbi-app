import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { subjectReducer } from '../reducers/subjectReducer';

const reducers = combineReducers({
  auth: authReducer,
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