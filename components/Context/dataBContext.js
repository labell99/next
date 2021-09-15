import { createContext, useContext } from 'react'

const DataBContext = createContext()

export default function useDataBContext() {
	return useContext(DataBContext);
}
