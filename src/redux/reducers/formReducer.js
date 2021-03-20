import * as formTypes from '../types/formTypes'

const init = {
    project_name: '',
    project_description: '',
    client: '',
    contractor: '',
    max_X: 0,
    min_X: 0,
    max_Y: 0,
    min_Y: 0,
    max_Z: 0,
    min_Z: 0,

}

const formReducer = (state = init, action) => {
    if(action.type === formTypes.SET_INPUTS) {
        return action.payload
    }
    return state
}


export default formReducer