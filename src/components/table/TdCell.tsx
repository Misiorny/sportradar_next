import { ReactNode } from "react";

interface TdCellProps {
  children: ReactNode;
  className?: string; //is win, lose, draw, postponed
}

export const TdCell = ({ children, className }: TdCellProps) => {
  return (
    <td className={`py-2 border border-slate-300 ${className}`}>{children}</td>
  );
};
