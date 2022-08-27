import React from "react";
import { SkillData } from "./SkillData";
const Skill = () => {
  return (
    <div className="leading-loose bg-gray-100 p-10">
      <div className="font-slogan text-6xl">
        Skills & <br />
        Experience
      </div>
      <div className="font-para flex flex-col gap-2 text-gray-500 text-lg my-8">
        <div>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create web products for both
          business and consumer use.
        </div>
        <div>
          I create successful responsive websites that are fast, easy to use,
          and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, building small and medium web
          apps, custom plugins, features, animations, and coding interactive
          layouts.
        </div>

        <div>
          I also have full-stack developer experience with popular open-source
          CMS like (WordPress, Drupal, Magento, Keystone.js and others) . Visit
          my LinkedIn profile for more details or just contact me.
        </div>
      </div>
      <div>
        {SkillData?.map((val, i) => {
          return (
            <div key={i} className="my-4">
              <div className="font-title text-xl">{val.title}</div>
              <div className="bg-gray-300">{val.progress}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
