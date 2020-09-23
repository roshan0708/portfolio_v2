import React from 'react';
import data from "./work.json";
import { Container, Row, Col } from 'react-bootstrap';
import WorkIcon from '@material-ui/icons/Work';

const Timeline = () => {
    return (
      <Container>
        <Row>
          <Col>
            <ul className="timeline">
            {
                data.map(item => {
                    return (
                      <li className="timeline-item" key={item.id}>
                        <div className="timeline-badge">
                          <WorkIcon className="glyphicon glyphicon-off" />
                        </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <div className="timeline-heading-div">
                              <h4 className="timeline-title">{item.company}</h4>
                              <h4 style={{fontSize:"18px"}}>{item.date}</h4>
                            </div>
                            <p>Software Engineer Intern</p>
                          </div>
                          <div className="timeline-body">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </li>
                    );
                })
            }
            </ul>
          </Col>
        </Row>
      </Container>
    );
}

export default Timeline;
