import { ReactNode } from 'react'

interface TableProps{
  children:ReactNode
}


export const Table=({children}:TableProps)=>{
  return(
    <table className="border mx-auto text-center table-auto ">
      {children}
    </table>
  )
}
