import { createContext, useContext, useState } from 'react'

export const DataBContext = createContext()

export function DataBProvider(props) {
	const {value, children} = props
    const [dbcontext, setDBContext] = useState("MRNA-IDS");
	return (
	   <DataBContext.Provider value={{dbcontext, setDBContext}}>
		{children}
	   </DataBContext.Provider>
	)
}

