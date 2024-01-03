import { Link } from "react-router-dom";
import "./projects.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const Projects = () => {
  const arr = [
    {
      id: 1,
      title: "Assignment1",
      description: "CV, Personal Digital Card",
      img: "https://spotio.com/wp-content/uploads/2021/12/20211220-1_SPOTIO_Feature-Launch_DBC_PersonalStyle.png",
      link: "https://rockahelller.github.io/rockaheller.github.io/",
    },
    {
      id: 2,
      title: "Assignment2",
      description: "E-Commerce with HTML, CSS, JS",
      img: "https://cdn.trend.az/2020/07/07/e_commerce_070720.jpg",
      link: "https://rockahelller.github.io/Assignment2/",
    },
    {
      id: 3,
      title: "React application",
      description: "React Practice in Web&Mobile1 Class",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      link: "https://rockahelller.github.io/my-react-app/",
    },
    {
      id: 4,
      title: "KeepApp",
      description: "Google Keeps Application",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png",
      link: "https://rockahelller.github.io/KeepApp/",
    },
    {
      id: 5,
      title: "To Do List",
      description: "Created with HTML, CSS and JS",
      img: "https://miro.medium.com/v2/resize:fit:512/1*GmMuqRe8cLZeKfT9fBP9Lg.jpeg",
      link: "https://rockahelller.github.io/todolist/",
    },
  ];

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <OwlCarousel
          className="carousel owl-carousel"
          margin={20}
          loop
          autoplay
          autoplayTimeout={2000}
          autoplayHoverPause
          responsive={{
            0: {
              items: 1,
              nav: false,
            },
            600: {
              items: 2,
              nav: false,
            },
            1000: {
              items: 3,
              nav: false,
            },
          }}
        >
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
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Projects;
