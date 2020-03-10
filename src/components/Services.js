import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title.js";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab porro eaque quibusdam ducimus qui quisquam nihil voluptatem, obcaecati alias"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab porro eaque quibusdam ducimus qui quisquam nihil voluptatem, obcaecati alias"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab porro eaque quibusdam ducimus qui quisquam nihil voluptatem, obcaecati alias"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ab porro eaque quibusdam ducimus qui quisquam nihil voluptatem, obcaecati alias"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
