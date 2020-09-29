import React from 'react';
import {Container} from 'react-bootstrap';
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const CardComponent = ({github,external,img,title,text,skills}) => {

    return (
      <Container>
        <div className="container card my-5">
          <ul className="ul">
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fill: "black" }} />
              </a>
            </li>
            <li>
              <a href={external} target="_blank" rel="noopener noreferrer">
                <LaunchIcon style={{ fill: "black" }} />
              </a>
            </li>
          </ul>
          <img src={img} alt="img" />
          <div className="overlay"></div>
          <div className="con-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{skills}</p>
          </div>
        </div>
      </Container>
    );
}

export default CardComponent;