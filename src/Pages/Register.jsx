import React from "react";
import "./register.css";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
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
  const onFinish = (values) => {
    setErrorMessage("");
    fetch("https://academics.newtonschool.co/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        projectId: projectId,
      },
      body: JSON.stringify({
        name: values.nickname,
        email: values.email,
        password: values.password,
        appType: "ott",
      }),
    })
      .then((response) =>
        response.json().then((data) => {
          if (data.status === "fail") {
            setErrorMessage(`${data.message}!`);
          } else {
            const bearer_token = data.token;

            localStorage.setItem("bearer_token", bearer_token);
            localStorage.setItem("loginUserName", values.nickname);
            navigate("/home");
          }
        })
      )
      .catch((err) => {
        console.log("Error while signing up: ", err);
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
              name="nickname"
              label="Your Name"
              rules={[
                {
                  required: true,
                  message: "Enter your name!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
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
              name="password"
              label="Password"
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
                    if (!value || getFieldValue("password") === value) {
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
                Create your AmazonClone Account
              </Button>
            </Form.Item>
            <div className="already-account">
              <span>Already have an account?</span>
              <span>
                <Link to={"/login"}>Sign in</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
