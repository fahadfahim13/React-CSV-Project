import { combineReducers } from 'redux'
import firstFormReducer from './firstFormReducer'
import secondFormReducer from './secondFormReducer'

const rootReducer = combineReducers({
    firstFormReducer: firstFormReducer,
    secondFormReducer: secondFormReducer
})

export default rootReducer