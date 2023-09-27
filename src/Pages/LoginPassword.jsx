import React from "react";
import "./login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Navigate, useNavigate } from "react-router";

const LoginPassword = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-container">
      <div className="login-prime-img-container">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt=""
        />
      </div>
      <div className="login-form-main-container">
        <div className="login-form-container">
          <h1>Sign in</h1>
          <div className="user-login-text">
            <p>suryaspandey@gmail.com</p>
          </div>
          <label className="login-label-email-phno" htmlFor="userName">
            Password
          </label>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "! Enter your Password",
                },
              ]}
            >
              <Input type="password" className="login-username-input" />
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login-continue-btn"
                // onClick={handleloginPassword}
              >
                Sign in
              </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
