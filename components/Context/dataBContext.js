import { createContext, useContext } from 'react'

export const DataBContext = createContext()

export default function useDataBContext() {
	return useContext(DataBContext);
}
