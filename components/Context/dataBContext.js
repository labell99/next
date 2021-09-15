import { createContext, useContext, useState } from 'react'

const DataBContext = createContext()

export function DataBContextProvider(props) {
	const {value, children} = props
    const [context, setContext] = useState("MRNA-IDS");

	return (
	   <DataBContext.Provider value={{context,setContext}}>
		{children}
	   </DataBContext.Provider>
	)
}

export function useDataBContext() {
	return useContext(DataBContext);
}
