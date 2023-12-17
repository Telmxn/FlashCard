import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const arr = [
    {
      id: 1,
      title: "SJS Hot N&apos; Spicy",
      description: "SJS hot n spicy is and resturant project.",
      img: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      id: 2,
      title: "SJS Hot N&apos; Spicy",
      description: "SJS hot n spicy is and resturant project.",
      img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      id: 3,
      title: "SJS Hot N&apos; Spicy",
      description: "SJS hot n spicy is and resturant project.",
      img: "https://images.pexels.com/photos/1804577/pexels-photo-1804577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      id: 4,
      title: "SJS Hot N&apos; Spicy",
      description: "SJS hot n spicy is and resturant project.",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
  ];

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="carousel owl-carousel">
          {arr.map((card) => {
            return (
              <div className="card" key={card.id}>
                <div className="box">
                  <img src={card.img} alt={card.title} />
                  <div className="text">{card.title}</div>
                  <p>{card.description}</p>
                  <Link to={card.link} className="project" target="_blank">
                    View Project
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
