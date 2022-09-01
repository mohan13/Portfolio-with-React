import React from "react";
import { ProjectData } from "./ProjectsData";
import Card from "../../UI/Card";
const ProjectsComponents = () => {
  return (
    <div className="grid gap-4 p-6 bg-gray-200">
      <div className="grid gap-2 text-center">
        <div className="font-slogan text-3xl md:text-6xl">PROJECTS</div>
        <div className="flex flex-col text-sm md:text-lg text-gray-500 gap-3 leading-loose my-4">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {ProjectData?.map((val, i) => {
          return (
            <div key={i}>
              <Card
                image={val.project}
                title={val.title}
                para={val.para}
                details={val.details}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponents;
