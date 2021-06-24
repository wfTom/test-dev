import { createContext, ReactNode } from 'react'

interface CoachContextData {}

interface CoachProviderProps {
  children: ReactNode
}

export const CoachContext = createContext({} as CoachContextData)

export function CoachProvider({ children, ...rest }: CoachProviderProps) {
  return <CoachContext.Provider value={{}}>{children}</CoachContext.Provider>
}
