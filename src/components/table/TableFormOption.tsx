interface TableFormOptionProps {
  value: string;
  name: string;
}
export const TableFormOption = ({ value, name }: TableFormOptionProps) => {
  return <option value={value}>{name}</option>;
};
