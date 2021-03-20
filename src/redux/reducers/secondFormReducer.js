import * as formTypes from '../types/formTypes'

const init = {
    max_X: 0,
    min_X: 0,
    max_Y: 0,
    min_Y: 0,
    max_Z: 0,
    min_Z: 0,
}

const secondFormReducer = (state = init, action) => {
    if(action.type === formTypes.ADD_TO_SECOND_FORM) {
        return action.payload
    }
    return state
}


export default secondFormReducer