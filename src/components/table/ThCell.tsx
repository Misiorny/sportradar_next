interface ThCellProps {
  tableHeaderText: string;
}
export const ThCell = ({ tableHeaderText }: ThCellProps) => {
  return <th className="border border-slate-300 py-2">{tableHeaderText}</th>;
};
