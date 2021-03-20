import * as formTypes from '../types/formTypes'

export const setFirstFormInputs = (obj) => {
    console.log(obj)
    return {
        type: formTypes.SET_INPUTS,
        payload: obj,
    }
}
