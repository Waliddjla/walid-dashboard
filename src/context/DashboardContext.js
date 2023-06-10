import React, {createContext, useState} from 'react'
import fulldata from './fulldata'

export const DashboardContext = createContext()

const DashboardContextProvider = props => {
    const[dataChart, setdataChart] = useState(fulldata['2023'])
    const[yearData, setyearData] = useState('2023')

    const changeYear = el => {
        setdataChart(el.target.value)
        setyearData(fulldata.el.target.value)
        
    }

    return (
        <DashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )
}