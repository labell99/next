import { createContext } from 'react'

export const DataBContext = createContext()

export function MenuProvider(props) {
	const {value, children} = props

	return (
	   <DataBContext.Provider value={value}>
		{children}
	   </DataBContext.Provider>
	)
}