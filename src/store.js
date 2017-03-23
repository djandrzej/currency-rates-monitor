import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import debug from 'debug-levels';
import thunkMiddleware from 'redux-thunk';
import DevTools from './containers/DevTools';
import rootReducer from './reducers';

const loggerMiddleware = createLogger({
    logger: debug('state')
});

const store =
    createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
        )
    );

export default store;
