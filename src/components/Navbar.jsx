import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Navbar = () => {
  const end = (
    <div className="flex align-items-center gap-3">
      <Button
        label="Works"
        className="p-button-text"
        style={{ color: 'white' }}
        onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
      />
      <Button
        label="About"
        className="p-button-text"
        style={{ color: 'white' }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      />
      <Button
        icon="pi pi-github"
        className="p-button-text"
        style={{ color: 'white' }}
        onClick={() => window.open('https://github.com/omar1taha', '_blank')}
      />
      <Button
        icon="pi pi-linkedin"
        className="p-button-text"
        style={{ color: 'white' }}
        onClick={() => window.open('https://www.linkedin.com/in/omar-hussien-684431125/', '_blank')}
      />
    </div>
  );

  return (
    <div className="">
      <Menubar start={<h1>Omars Portfolio</h1>} end={end} />
    </div>
  );
};

export default Navbar;
