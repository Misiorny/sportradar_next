interface TableTitleProps {
  tableTitle: string;
}
export const TableTitle = ({ tableTitle }: TableTitleProps) => {
  return (
    <div className="text-center">
      <h3 className="mx-auto p-2 my-3 text-3xl uppercase text-main ">
        {tableTitle}
      </h3>
    </div>
  );
};
