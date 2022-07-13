import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Col, Row, Button } from "antd";
import { Card } from "antd";

import "./Sidenav.css";

const { Content } = Layout;

type card_det_props = {
  title: string;
  icon: string;
  description: string;
  card1_p: string;
  card2_p: string;
};

const Cards = (props: card_det_props) => {
  const [isActive, setIsActive] = useState(true);
  const handleMousecard = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <Content style={{ margin: "20px 10px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 280, height: 140 }} className="card1">
            {isActive && (
              <div
                className="site-card-border-less-wrapper"
                onMouseEnter={handleMousecard}
              >
                <Row>
                  <Col span={6}>
                    <img src={props.icon} alt="" />
                  </Col>
                  <Col span={18}>
                    <h3 className="cardTitle">{props.title}</h3>
                    <p className="cardPara">{props.desc_id}</p>
                    <p className="cardSpan">{props.card1_p}</p>
                  </Col>
                </Row>
              </div>
            )}
            {!isActive && (
              <div className="hoverdis" onMouseLeave={handleMousecard}>
                <p className="card2hp"> {props.card2_p} </p>
                <Button className="dltbtn">Delete</Button>
                <Button type="primary" className="card2btn">
                  View Details
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Cards;
