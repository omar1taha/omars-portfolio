import { Menubar } from "primereact/menubar";

const Navbar = () => {
  const items = [
    {
      label: "Works",
      command: () => {
        document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "About",
       command: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  return (
    <div className="">
      <Menubar model={items} start={<h1>Omars Portfolio</h1>} />
    </div>
  );
};

export default Navbar;
