import React from 'react'
import '../App.css'
import { connect } from 'react-redux'


const Results = ({ firstFormReducer, secondFormReducer }) => {
    return (
        <div style={{width: '100%'}}>
            <h3>Results</h3>
            <table>
                <thead>
                    <td>Project Name</td>
                    <td>Project Description</td>
                    <td>Client</td>
                    <td>Contractor</td>
                    

                    <td>Minimum of X</td>
                    <td>Maximum of X</td>
                    <td>Minimum of Y</td>
                    <td>Maximum of Y</td>
                    <td>Minimum of Z</td>
                    <td>Maximum of Z</td>
                </thead>

                <tr>
                    <td> {firstFormReducer.project_name?firstFormReducer.project_name:''} </td>
                    <td> {firstFormReducer.project_description?firstFormReducer.project_description:''} </td>
                    <td> {firstFormReducer.client?firstFormReducer.client:''} </td>
                    <td> {firstFormReducer.contractor?firstFormReducer.contractor:''} </td>

                    <td> {secondFormReducer.min_X?secondFormReducer.min_X:0} </td>
                    <td> {secondFormReducer.max_X?secondFormReducer.max_X:0} </td>
                    <td> {secondFormReducer.min_Y?secondFormReducer.min_Y:0} </td>
                    <td> {secondFormReducer.max_Y?secondFormReducer.max_Y:0} </td>
                    <td> {secondFormReducer.min_Z?secondFormReducer.min_Z:0} </td>
                    <td> {secondFormReducer.max_Z?secondFormReducer.max_Z:0} </td>

                </tr>

                
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        firstFormReducer: state.firstFormReducer,
        secondFormReducer: state.secondFormReducer
    }
  }

export default connect(mapStateToProps)(Results);
