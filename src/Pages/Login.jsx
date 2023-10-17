import React, { useState } from "react";
import "./login.css";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");

  const onFinish = (values) => {
    if (values) {
      setLoginEmail(values.email);
      navigate("/loginpassword", { state: { loginEmail: values.email } });
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
              name="email"
              rules={[
                {
                  required: true,
                  message: "! Enter your email!",
                },
              ]}
            >
              <Input className="login-username-input" type="email" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login-continue-btn"
              >
                Continue
              </Button>
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
