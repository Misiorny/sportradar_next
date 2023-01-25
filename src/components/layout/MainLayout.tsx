import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex flex-col flex-wrap align-middle'>
      {children}
    </div>
  )
}
