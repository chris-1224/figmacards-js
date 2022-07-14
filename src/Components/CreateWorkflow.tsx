import React, { useState } from "react";
import { Input, Button, Modal, Form } from "antd";
import { Layout } from "antd";
import { Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const { Header } = Layout;
const { TextArea } = Input;

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

// Text Area
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log("Change:", e.target.value);
};

function CreateWorkflow() {
  // Modal code 2
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

  // Upload Image Code
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  // Image upload
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // Form item check
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Header>
      <Row>
        <Col span={6}>
          <p className="lefthead">Workflows</p>
        </Col>
        <Col span={12}>
          <Input
            prefix={<SearchOutlined />}
            className="abc1"
            placeholder="Search a workflow"
          />
        </Col>
        <Col span={6}>
          <Button className="abc2" type="primary" onClick={showModal}>
            Create Workflow
          </Button>
          <Modal
            title="Setup Employee"
            visible={isModalVisible}
            onOk={Save}
            onCancel={handleCancel}
            footer={null}
          >
            <Row>
              <Col span={6}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Col>
              <Col span={18}>
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
                    <TextArea
                      showCount
                      maxLength={100}
                      style={{ height: 120 }}
                      onChange={onChange}
                      className="empname"
                    />
                    {/* <Input className="empname" /> */}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <Row>
              <Button type="primary" className="savebtn" onClick={Save}>
                Save
              </Button>
              <Button className="cancelbtn" onClick={handleCancel}>
                Cancel
              </Button>
            </Row>
          </Modal>
        </Col>
      </Row>
    </Header>
  );
}

export default CreateWorkflow;
