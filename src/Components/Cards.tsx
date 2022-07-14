import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Input, Col, Row, Button, Modal, Form } from "antd";
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
  // Card Hover
  const [isActive, setIsActive] = useState(true);
  const handleMousecard = () => {
    setIsActive((isActive) => !isActive);
  };

  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const Save = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Form item check
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content style={{ margin: "20px 10px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 280, height: 140 }} className="card1">
            <div
              className={
                isActive ? "site-card-border-less-wrapper" : "hoverdis"
              }
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

            <div
              className={
                isActive ? "hoverdis" : "site-card-border-less-wrapper"
              }
              onMouseLeave={handleMousecard}
            >
              <p className="card2hp"> {props.card2_p} </p>
              <Button className="dltbtn">Delete</Button>
              <Button type="primary" className="card2btn" onClick={showModal}>
                View Details
              </Button>
              <Modal
                visible={isModalVisible}
                onOk={Save}
                onCancel={handleCancel}
                className="viewdet"
                footer={null}
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
                <Row>
                  <Col span={24}>
                    <Form
                      name="basic"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        className="EmpName"
                        label="Employee Name"
                        name="Enter Name"
                        rules={[
                          {
                            required: true,
                            message: "Enter your Name !!!",
                          },
                        ]}
                      >
                        <Input className="empname" />
                      </Form.Item>

                      <Form.Item
                        className="EmpDesg"
                        label="Designation"
                        name="Enter your Role"
                        rules={[
                          {
                            required: true,
                            message: "Enter your Role",
                          },
                        ]}
                      >
                        <Input className="empname" />
                      </Form.Item>
                      <Form.Item
                        className="Empdet"
                        label="Employee Details"
                        name="Enter Details"
                        rules={[
                          {
                            required: true,
                            message: "Enter Details",
                          },
                        ]}
                      >
                        <Input className="empname" />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Button type="primary" className="editbtn" onClick={Save}>
                    Edit
                  </Button>
                  <Button className="cancelbtn" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Row>
              </Modal>
            </div>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Cards;
