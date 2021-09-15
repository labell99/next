import { createContext, useContext } from 'react'

const export DataBContext = createContext()

export default function useDataBContext() {
	return useContext(DataBContext);
}
