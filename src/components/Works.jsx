import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";

const Works = () => {
  console.log("works render");
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("assets/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const panelHeader = (project) => {
    return (
      <div className="flex w-full justify-content-between align-items-center h-5rem panel-header">
        <div>
          <h2>{project.title}</h2>
        </div>
        <div>
          <Button
            icon={project.icon}
            className="p-button-rounded p-button-text"
            onClick={() => window.open(project.url, "_blank")}
          />
        </div>
      </div>
    );
  };
  return (
    <div id = "works" className="main-section">
      <h1>Works</h1>
      <div className="grid">
        {projects.map((project, index) => {
          return (
            <div key={index} className="md:col-6">
              <Panel headerTemplate={panelHeader(project)}>
                <div className="w-full works-img">
                  <img src={project.img} />
                </div>
                <br></br>
                <li>{project.description}</li>
                <Button className="mt-4 w-full" label="View" onClick={() => window.open(project.url, "_blank")} />
              </Panel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
