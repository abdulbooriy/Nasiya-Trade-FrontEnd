import React from "react";
import type { FormProps } from "antd";
import { Alert, Button, Form, Input, Typography } from "antd";
import { useAuth } from "../service/useAuth";
import { useDispatch } from "react-redux";
import { setToken } from "../store/auth.slice";
import type { FieldType } from "@/shared/types";
import { PatternFormat } from "react-number-format";

const { Title } = Typography;

const Login: React.FC = () => {
  const { login } = useAuth();
  const { isPending, isError } = login;
  const dispatch = useDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const new_login = {
      phone: values.phone?.replace(/\s/gi, ""),
      password: values.password,
    };

    login.mutate(new_login, {
      onSuccess: (res) => {
        dispatch(setToken(res.access_token));
      },
    });
  };

  return (
    <div className="w-full h-screen bg-[#f7f7f7] grid place-items-center">
      <div className="max-w-[500px] w-full bg-white p-8 rounded-3xl shadow">
        <Title level={1} className="text-center">
          Tizimga kirish
        </Title>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          style={{ fontWeight: "bold" }}>
          <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}>
            <PatternFormat
              format="+998 ## ### ## ##"
              mask={" "}
              allowEmptyFormatting
              customInput={Input}
              style={{ height: "40px" }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input.Password
              style={{
                height: "40px",
                fontSize: "15px",
              }}
              placeholder="Enter your password"
            />
          </Form.Item>

          {isError && (
            <div className="mb-4">
              <Alert
                style={{ color: "white", background: "crimson" }}
                message="Phone number or Password is wrong!"
                type="error"
              />
            </div>
          )}

          <Form.Item style={{ margin: 0 }} label={null}>
            <Button
              loading={isPending}
              type="primary"
              className="w-full"
              htmlType="submit"
              style={{
                height: "40px",
                fontSize: "18px",
              }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Login);
