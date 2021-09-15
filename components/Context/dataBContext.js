import { createContext, useContext, useState } from 'react'

const DataBContext = createContext()

export default function DataBContextProvider({children}) {

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
