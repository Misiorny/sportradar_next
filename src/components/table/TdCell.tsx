
interface TdCellProps {
  className?: string; //is win, lose, draw, postponed
}

export const TdCell = ({  className }: TdCellProps) => {
  return (
    <td className={`py-2 border border-slate-300 ${className}`}></td>
  );
};
