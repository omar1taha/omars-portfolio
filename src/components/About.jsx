import { Card } from "primereact/card";

const About = () => {
  return (
    <div className="main-section">
      <h1>About</h1>
      <Card>
        <div className="flex h-15rem">
          <div className="flex flex-equal align-items-center justify-content-center text-5xl">
            Hi, I&apos;m Omar Taha, <br></br> Senior Frontend Engineer <br></br> based in Egypt
          </div>
          <div className="flex flex-equal align-items-center text-xl text-justify">
            Seeking a new challenge in my career, developed apps <br></br> in different categories like e-commerce, gis based
            apps <br></br> and content managment systems
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
