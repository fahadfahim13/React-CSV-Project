import * as formTypes from '../types/formTypes'

const init = {
    project_name: '',
    project_description: '',
    client: '',
    contractor: '',

}

const firstFormReducer = (state = init, action) => {
    if(action.type === formTypes.ADD_TO_FIRST_FORM) {
        return action.payload
    }
    return state
}


export default firstFormReducer