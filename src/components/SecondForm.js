import React from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import FirstForm from './firstForm';


const SecondForm = ({ firstFormReducer, }) => {
    return (
        <div>
            <FirstForm disabled={true} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        firstFormReducer: state.firstFormReducer
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        // setFirstFormInputs: (obj) => dispatch(setFirstFormInputs(obj))
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(SecondForm);