import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import todoReducer from './todos/reducer'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware)
)
 
sagaMiddleware.run(rootSaga)

export default Store