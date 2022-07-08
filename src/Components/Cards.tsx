import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Col, Row } from "antd";
import { Card } from "antd";
// import { useState } from "react";

//import { SearchOutlined } from "@ant-design/icons";

import "./Sidenav.css";

const { Content } = Layout;

// const [isActive, setIsActive] = useState(true);

// const handleMousecard = () => {
//   setIsActive((isActive) => !isActive);
// };

type card_det_props = {
  title: string;
  icon: string;
  description: string;
  card1_p: string;
  card2_p: string;
};

const Cards = (props: card_det_props) => {
  //console.log(props.title);

  return (
    <Content style={{ margin: "20px 10px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div
            className="site-card-border-less-wrapper"
            // onMouseEnter={handleMousecard}
          >
            <Card style={{ width: 270, height: 140 }} className="card1">
              <Row>
                <Col span={6}>
                  <img src={props.icon} alt="" />
                </Col>
                <Col span={18}>
                  <h3 className="cardTitle">{props.title}</h3>
                  <p className="cardPara">{props.description}</p>
                  <p className="cardSpan">{props.card1_p}</p>
                </Col>
              </Row>
            </Card>
          </div>

          {/* {isActive && (
            <div
              className="site-card-border-less-wrapper"
              onMouseEnter={handleMousecard}
            >
              <Card style={{ width: 270, height: 140 }} className="card1">
                <Row>
                  <Col span={6}>
                    <img src={props.icon} alt="" />
                  </Col>
                  <Col span={18}>
                    <h3 className="cardTitle">{props.title}</h3>
                    <p className="cardPara">{props.description}</p>
                    <p className="cardSpan">{props.card1_p}</p>
                  </Col>
                </Row>
              </Card>
            </div>
          )}
           */}
          {/* {!isActive && (
            <div className="hoverdis" onMouseLeave={handleMousecard}>
              <Card style={{ width: 270, height: 140 }} className="card1">
                <Row>
                  <Col span={6}>
                    <img src={props.icon} alt="" />
                  </Col>
                  <Col span={24}>
                    <h3> {props.card2_p} </h3>
                    <div>
                      <button className="btn2">View Details</button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          )} */}
        </Col>
      </Row>
    </Content>
  );
};

export default Cards;
