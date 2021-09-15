import { createContext, useContext, useState } from 'react'

const DataBContext = createContext()

export function DataBContextProvider({children}) {

	return (
	   <DataBContext.Provider>
		{children}
	   </DataBContext.Provider>
	)
}

export default function useDataBContext() {
	return useContext(DataBContext);
}
