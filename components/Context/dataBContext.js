import { createContext, useContext, useState } from 'react'

const DataBContext = createContext()
export default DataBContext;

export function DataBProvider(props) {
	const {value, children} = props
    const [dbcontext, setDBContext] = useState("MRNA-IDS");
    console.log("db settinghj: ",DataBContext,dbcontext);
	return (
	   <DataBContext.Provider value={{dbcontext, setDBContext}}>
		{children}
	   </DataBContext.Provider>
	)
}

