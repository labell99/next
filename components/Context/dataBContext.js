import React from "react";
import { createContext, useContext, useState } from 'react'

const DataBContext = createContext(undefined)

export function DataBContextProvider({ children }) {

  const [context, setContext] = useState("MRNA-IDS");

  return (
    <DataBContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </DataBContext.Provider>
  )
}

export function useDataBContext() {
  const context = useContext(DataBContext)

  if (!context)
    throw new Error('useDataBContext must be used inside a `DataBContextProvider`')

  return context
}
