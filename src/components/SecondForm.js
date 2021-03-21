import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux'
import FirstForm from './firstForm';
import CSVReader from 'react-csv-reader'
import { setSecondFormInputs } from '../redux/actions/formActions'
import secondFormElements from './secondFormElements'
import { Link } from "react-router-dom";
import processData from './processData'
import { Line, Bar } from 'react-chartjs-2';
import processChartData from './processChartData'


const SecondForm = ({  setSecondFormInputs }) => {
    const [state, setstate] = useState({
        max_X: 0,
        min_X: 0,
        max_Y: 0,
        min_Y: 0,
        max_Z: 0,
        min_Z: 0,
    })
    const [FileUploaded, setFileUploaded] = useState(false)
    const [CSVdata, setCSVdata] = useState({
        kp: [],
        x: []
    })

    const getDefaultValue = (name) => {
        if(FileUploaded && name){
            if(name === 'min_X'){
                return state.min_X
            } else if(name === 'min_Y'){
                return state.min_X
            } else if(name === 'min_Z'){
                return state.min_Z
            } else if(name === 'max_X'){
                return state.max_X
            } else if(name === 'max_y'){
                return state.max_Y
            } else if(name === 'max_Z'){
                return state.max_Z
            }
        }
        return 0
    }

    return (
        <div>
            <FirstForm disabled={true} />
            <div> <hr /> </div>
            <div>
                <h3> Second Form </h3>
            </div>
            <div>
                <CSVReader onFileLoaded={(data) => {
                    let result = processData(data)
                    setFileUploaded(true)
                    setstate(result.data)
                    setCSVdata({
                        kp: result.kp,
                        x: result.x
                    })
                } } />
            </div>
            {FileUploaded && <div>
                {/* <Line data={processChartData(CSVdata)}
                options={{
                    title:{
                    display:true,
                    text:'X vs KP',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }} /> */}
                <Bar data={processChartData(CSVdata)}
                options={{
                    title:{
                    display:true,
                    text:'X vs KP',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }} />
            </div>}

            <Form>
                {secondFormElements.map((element) => {
                    return (
                        <>
                            <Form.Item label={element.placeholder}  key={element.fieldName} rules={[{ required: element.required, message: element.placeholder }]}>
                                <Input type={element.fieldType} name={element.fieldName} key={element.fieldName}
                                placeholder={FileUploaded?getDefaultValue(element.fieldName):element.placeholder}
                                required={element.required} 
                                onChange={(e) => setstate({...state, [element.fieldName]: parseFloat(e.target.value)}) } />
                            </Form.Item>
                        </>
                    )
                })}
                <Link to={'/results'}>
                    <Form.Item key="submit">
                        <Button type="primary" htmlType="submit" onClick={() => setSecondFormInputs(state)}> Show Results </Button>
                    </Form.Item>
                </Link>

            </Form>
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
        setSecondFormInputs: (obj) => dispatch(setSecondFormInputs(obj))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SecondForm);