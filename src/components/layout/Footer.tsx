interface FooterProps {
  footerText: string;
}

export const Footer = ({ footerText }: FooterProps) => {
  return (
    <footer className="bg-main  py-4 px-2 bottom-0">
      <p className="text-xl text-center text-complementary ">{footerText}</p>
    </footer>
  );
};
