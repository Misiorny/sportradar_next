interface TableRowProps {
  teamsPlayed: string;
  result: string;
}
export const TableRow = ({ teamsPlayed, result }: TableRowProps) => {
  return (
    <tr>
      <td className="border border-slate-300 py-2">{teamsPlayed}</td>
      <td className="border border-slate-300 py-2 uppercase">{result}</td>
    </tr>
  );
};
