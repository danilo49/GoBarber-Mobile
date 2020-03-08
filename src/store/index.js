import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middllewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middllewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
