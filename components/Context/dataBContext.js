import { createContext, useContext, useState } from 'react'

export const DataBContext = createContext();

export function DataBProvider(props) {
	const {value, children} = props
    console.log("db settinghj: ",DataBContext,value);
	return (
	   <DataBContext.Provider value={value}>
		{children}
	   </DataBContext.Provider>
	)
}

