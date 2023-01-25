interface HeaderProps {
  textHeader: string;
}

export const Header = ({ textHeader }: HeaderProps) => {
  return (
    <header className="bg-main flex px-8 py-4 ">
      <h1 className="text-3xl text-complementary uppercase mx-auto ">
        {textHeader}
      </h1>
    </header>
  )
}
