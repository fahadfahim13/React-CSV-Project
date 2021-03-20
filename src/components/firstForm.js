import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd';
import firstFormElements from './firstFormElements'
import { Link } from "react-router-dom";

import { setFirstFormInputs } from '../redux/actions/formActions'
import { connect } from 'react-redux'

const FirstForm = ({ setFirstFormInputs, disabled = false, formElements = firstFormElements, firstFormReducer }) => {

    const [state, setstate] = useState({
        project_name: '',
        project_description: '',
        client: '',
        contractor: '',
    })

    useEffect(() => {
        setstate(firstFormReducer)
    }, [firstFormReducer])

    const getDefaultValue = (name) => {
        if(firstFormReducer.project_name && name){
            if(name === 'project_name'){
                return firstFormReducer.project_name
            } else if(name === 'project_description'){
                return firstFormReducer.project_description
            } else if(name === 'client'){
                return firstFormReducer.client
            } else if(name === 'contractor'){
                return firstFormReducer.contractor
            }
        }
        return ''
    }

    return (
        <Form>
            <div>
                <h2>First Form </h2>
            </div>
            {formElements.map((element) => {

                return (
                    <>
                        <Form.Item label={element.placeholder}  key={element.fieldName} rules={[{ required: element.required, message: element.placeholder }]}>
                            <Input type={element.fieldType} name={element.fieldName} key={element.fieldName} disabled={disabled}
                            placeholder={getDefaultValue(element.fieldName)?getDefaultValue(element.fieldName):element.placeholder} 
                            required={element.required} 
                            onChange={(e) => setstate({...state, [element.fieldName]: e.target.value}) } />
                        </Form.Item>
                    </>
                )
            })}

            {!disabled && 
            
            <Link to={'/second_form'}>
                <Form.Item key="submit">
                    <Button type="primary" htmlType="submit" onClick={() => setFirstFormInputs(state)}> Submit </Button>
                </Form.Item>
            </Link>
            }

        </Form>
    )
}

const mapStateToProps = (state) => {
    return{
        firstFormReducer: state.firstFormReducer
    }
  }



const mapDispatchToProps = (dispatch) => {
    return {
        setFirstFormInputs: (obj) => dispatch(setFirstFormInputs(obj))
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(FirstForm);
