import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import firstFormElements from './firstFormElements'
import { Link } from "react-router-dom";

import { setFirstFormInputs } from '../redux/actions/formActions'
import { connect } from 'react-redux'

const FirstForm = ({ setFirstFormInputs, disabled = false }) => {

    const [state, setstate] = useState({
        project_name: '',
        project_description: '',
        client: '',
        contractor: '',
    })


    return (
        <Form>
            {firstFormElements.map((element) => {

                return (
                    <>
                        <Form.Item label={element.placeholder}  key={element.fieldName} rules={[{ required: element.required, message: element.placeholder }]}>
                            <Input type={element.fieldType} name={element.fieldName} key={element.fieldName} disabled={disabled}
                            placeholder={element.placeholder} required={element.required}
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


const mapDispatchToProps = (dispatch) => {
    return {
        setFirstFormInputs: (obj) => dispatch(setFirstFormInputs(obj))
    }
  }
  

export default connect(null, mapDispatchToProps)(FirstForm);
