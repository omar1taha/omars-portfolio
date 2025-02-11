import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay flex">
        <div className="flex w-full">
          <div className="flex flex-equal align-items-center">
            <div className="hero-text pl-8">
              <h1 className="text-6xl">Welcome to My Portfolio</h1>
              <p className="text-2xl">
                <TypeAnimation
                  sequence={[
                    "I'm a software engineer graduated in 2018",
                    1000,
                    "Experience in React, Node, Web development",
                    1000,
                    "Check out my works and projects",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
          </div>
          <div className="flex flex-equal align-items-center justify-content-center">
            <div className="pp-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
