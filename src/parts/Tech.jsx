import React from "react";
import { ReactComponent as HtmlLogo } from "../assets/logos/html.svg";
import { ReactComponent as CssLogo } from "../assets/logos/css.svg";
import { ReactComponent as JavascriptLogo } from "../assets/logos/javascript.svg";
import { ReactComponent as ReactLogo } from "../assets/logos/react.svg";
import { ReactComponent as PSQLLogo } from "../assets/logos/postgresql.svg";
import { ReactComponent as TailwindLogo } from "../assets/logos/tailwind.svg";
import { ReactComponent as RAPILogo } from "../assets/logos/restfulapi.svg";
import { ReactComponent as NJSLogo } from "../assets/logos/nodejs.svg";
import { ReactComponent as ExpressLogo } from "../assets/logos/expressjs.svg";
import { ReactComponent as JWTLogo } from "../assets/logos/jwt.svg";
import { ReactComponent as MongoDBLogo } from "../assets/logos/mongodb.svg";
import { ReactComponent as PostmanLogo } from "../assets/logos/postman.svg";

function Tech() {
  const techsLearned = [
    {
      name: "HTML",
      Icon: HtmlLogo
    },
    {
      name: "CSS",
      Icon: CssLogo
    },
    {
      name: "JavaScript",
      Icon: JavascriptLogo
    },
    {
      name: "React",
      Icon: ReactLogo
    },
    {
      name: "Node.js",
      Icon: NJSLogo
    },
    {
      name: "Express.js",
      Icon: ExpressLogo
    },
    {
      name: "MongoDB",
      Icon: MongoDBLogo
    },
    {
      name: "Postman",
      Icon: PostmanLogo
    }
  ];
  const techsLearning = [
    {
      name: "PostgreSQL",
      Icon: PSQLLogo
    },
    {
      name: "Tailwind",
      Icon: TailwindLogo
    },
    {
      name: "Restful API",
      Icon: RAPILogo
    },
    {
      name: "JWT Auth",
      Icon: JWTLogo
    }
  ];

  const renderTechs = techs =>
    techs.map(({ name, Icon }) => (
      <span key={name} className="tech-item">
        <Icon className="tech-logo" />
        {name}
      </span>
    ));
  return (
    <section id="techs" className="tech-info">
      <h2>Tech Stack</h2>
      <h3>Techs Learned:</h3>
      <p className="tech-details">{renderTechs(techsLearned)}</p>
      <h3>Techs Planned:</h3>
      <p className="tech-details">{renderTechs(techsLearning)}</p>
    </section>
  );
}

export default Tech;
