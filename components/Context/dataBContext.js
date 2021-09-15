import { createContext, useContext, useState } from 'react'

export const DataBContext = createContext()

export function DataBProvider(props) {
	const {value, children} = props
    const [dbcontext, setDBContext] = useState("");
	return (
	   <DataBContext.Provider value={{dbcontext, setDBContext}}>
		{children}
	   </DataBContext.Provider>
	)
}

default export function useDataBContext() {
	return useContext(DataBContext);
}