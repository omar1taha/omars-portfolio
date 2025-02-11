import { Menubar } from "primereact/menubar";

const Navbar = () => {
  const items = [
    {
      label: "Works",
    },
    {
      label: "About",
    },
  ];

  return (
    <div className="">
      <Menubar model={items} start={<h1>Omars Portfolio</h1>} />
    </div>
  );
};

export default Navbar;
