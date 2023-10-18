import React from "react";
// import "./register.css";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateNewPassword = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const loginUserName = localStorage.getItem("loginUserName");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const projectId = "zxke0qiu2960";

  const bearer_token = localStorage.getItem("bearer_token");
  const onFinish = (values) => {
    setErrorMessage("");
    fetch("https://academics.newtonschool.co/api/v1/user/updateMyPassword", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        projectId: projectId,
        Authorization: `Bearer ${bearer_token}`,
      },
      body: JSON.stringify({
        name: loginUserName,
        email: values.email,
        passwordCurrent: values.oldpassword, // new password
        password: values.newpassword, // old password
        appType: "ott",
      }),
      redirect: "follow",
    })
      .then((response) =>
        response.json().then((data) => {
          if (data.status === "fail") {
            setErrorMessage(`${data.message}!`);
            message.info("Changes Cancelled");
          } else {
            localStorage.setItem("bearer_token", bearer_token);
            message.success("Changes Saved");
            navigate("/home");
          }
        })
      )
      .catch((err) => {
        console.log("Error while changing password: ", err);
      });
  };
  return (
    <>
      <div className="register-form-container">
        <div className="login-prime-img-container">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
            alt=""
          />
        </div>
        <div className="register-form-main">
          <h1 style={{ textAlign: "center" }}>Change Password</h1>
          <Form
            className="register-form"
            {...formItemLayout}
            layout={formLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            {errorMessage && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {errorMessage}
              </p>
            )}

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Enter your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="oldpassword"
              label="Old Password"
              rules={[
                {
                  required: true,
                  message: "At least 6 characters",
                  min: 6,
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="newpassword"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "At least 6 characters",
                  min: 6,
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Re-enter Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newpassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...buttonItemLayout}>
              <Button
                style={{ width: "100%" }}
                className="register-create-account-btn"
                type="primary"
                htmlType="submit"
              >
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateNewPassword;
