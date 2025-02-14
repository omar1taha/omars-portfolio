import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

const Works = () => {
  const projects = [
    {
      title: "Kuyua Landing Page",
      icon: "pi pi-external-link",
      img: "./omars-portfolio/kuyuaworks.png",
      description: "Landing page for Kuyua, a leading environmental solutions software, implemented in Europe, GR ",
    },
    {
      title: "Chiral Client App",
      icon: "pi pi-external-link",
      img: "./omars-portfolio/chiralworks.png",
      description: "Chiral client app, dental clinic management software, trusted by 100+ clinics in United Kingdom",
    },
    {
      title: "Kuyua Client App",
      icon: "pi pi-external-link",
      img: ".omars-portfolio/kuyuaclientworks.png",
      description: "Kuyua client app, environmental solutions software, implemented in Europe, GR",
    },
  ];
  const panelHeader = (project) => {
    console.log("header render");
    return (
      <div className="flex w-full justify-content-between align-items-center h-5rem panel-header">
        <div>
          <h2>{project.title}</h2>
        </div>
        <div>
          <Button icon={project.icon} className="p-button-rounded p-button-text" />
        </div>
      </div>
    );
  };
  return (
    <div className="main-section">
      <h1>Works</h1>
      <div className="grid">
        {projects.map((project, index) => {
          return (
            <div key={index} className="col-6">
              <Panel headerTemplate={panelHeader(project)}>
                <div className="w-full works-img">
                  <img src={project.img} />
                </div>
                <br></br>
                <li>{project.description}</li>
                <Button className="mt-4 w-full" label="View" />
              </Panel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
