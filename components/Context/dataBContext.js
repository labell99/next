import { createContext, useContext } from 'react'

const DataBContext = createContext()

export function useDataBContext() {
	return useContext(DataBContext);
}
