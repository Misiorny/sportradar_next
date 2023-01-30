import { ReactNode }       from 'react'

interface TableFormProps {
  children:ReactNode;
}

export const TableForm = ({ children }: TableFormProps) => {
  return (
    <section className="flex flex-col">
      <form className="mx-auto flex">
        <label htmlFor="season" className="p-2 text-xl uppercase text-main">
          Chose Season
        </label>
        <select
          name="season"
          id="season"
          className="text-complementary text-xl p-2"
        >
          {children}
        </select>
      </form>
    </section>
  );
};
