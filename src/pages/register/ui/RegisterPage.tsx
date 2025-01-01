import { RegisterUserData, selectUser, setUser } from "@/entities/user";
import { useRegisterMutation } from "@/shared/api";
import { Button, Flex, Form, FormProps, Input, Typography } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import s from "./RegisterPage.module.scss";

type FieldType = RegisterUserData;

type Props = {};

export const RegisterPage: FC<Props> = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    register(values).then((res) => {
      dispatch(setUser(res.data?.user));
    });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Flex className={s.registerPage} justify="center" align="center">
      <Flex gap="large" vertical align="center">
        <Typography.Title level={1} className={s.title}>
          Регистрация
        </Typography.Title>
        <Form
          name="auth"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          size="large"
          onFinish={handleSubmit}
        >
          <Form.Item<FieldType>
            label="Имя"
            name="username"
            rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Пожалуйста, введите email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className={s.submitButtonWrapper}>
            <Button
              type="primary"
              htmlType="submit"
              className={s.submitButton}
              loading={isLoading}
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};
