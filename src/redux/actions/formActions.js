import * as formTypes from '../types/formTypes'

export const setFirstFormInputs = (obj) => {
    console.log(obj)
    return {
        type: formTypes.ADD_TO_FIRST_FORM,
        payload: obj,
    }
}

export const setSecondFormInputs = (obj) => {
    console.log(obj)
    return {
        type: formTypes.ADD_TO_SECOND_FORM,
        payload: obj,
    }
}
