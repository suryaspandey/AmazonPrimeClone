import React, { useState } from "react";
import "./login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import LoginPassword from "./LoginPassword";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginUserName, setLoginUserName] = useState("");

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    if (values) {
      setLoginUserName(values.username);
      navigate("/loginpassword", { state: { loginUserName: values.username } });
    }
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
          <label className="login-label-email-phno" htmlFor="userName">
            Email
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "! Enter your username!",
                },
              ]}
            >
              <Input className="login-username-input" type="text" />
            </Form.Item>
            {/* <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                // prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                // placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item> */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login-continue-btn"
              >
                Continue
              </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
          <div className="login-policy-text">
            <p style={{ fontSize: "14px" }}>
              By continuing, you agree to the Amazon Conditions of Use and
              Privacy Notice.
            </p>
          </div>
        </div>
        <div className="login-divider-container">
          <h5 className="new-to-amazonClone-txt">New to AmazonClone?</h5>
          <div className="line-divder"></div>
        </div>
        <div className="create-account-btn-container login-form-container">
          <button className="create-account-btn ">
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              Create your Amazon Clone account
            </Link>
            {/* <Navigate to={<LoginPassword />} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
