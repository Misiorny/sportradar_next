import tableHeadNames from "../../data/tableHeadNames";
import { ThCell } from "./ThCell";

export const TableHeader = () => {
  return (
    <thead>
    <tr>
      {tableHeadNames.stepOne.map((e) => (
        <ThCell key={e.id} tableHeaderText={e.headName} />
      ))}
    </tr>
    </thead>
  );
};
