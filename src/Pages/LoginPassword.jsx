import React from "react";
import "./login.css";
import { Button, Form, Input } from "antd";
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const LoginPassword = ({ loginEmail }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // ap12345@gmail.com
  const recievedEmail = location.state.loginEmail;
  // console.log("recievedEmail", recievedEmail);

  // const bearerToken = localStorage.getItem("access_token");
  // console.log(bearerToken);
  const projectId = "zxke0qiu2960";

  const handleLogin = (values) => {
    fetch("https://academics.newtonschool.co/api/v1/user/login", {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
        projectId: projectId,
      },
      body: JSON.stringify({
        email: recievedEmail,
        password: values.password,
        appType: "ott",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          localStorage.setItem("access_token", data.token);
          navigate("/home");
        } else {
          console.error("Login failed:", data.message);
        }
      })
      .catch((err) => {
        console.log("Error while logging in to PrimeClone: ", err);
      });
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values.password);
    handleLogin(values);
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
            <p>{recievedEmail}</p>
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
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
