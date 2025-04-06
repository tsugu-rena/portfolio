import React from "react";
import styles from "./index.module.css";

type ProjectCardProps = {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, startDate, endDate, description, image, link }) => {
  return (
    <div className={styles.card}>
      <a href={link} className={styles.link} rel="noopener noreferrer">
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.date}>
            <span className={styles.startDate}>{startDate}</span>
            <span>-</span>
            <span className={styles.endDate}>{endDate}</span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
