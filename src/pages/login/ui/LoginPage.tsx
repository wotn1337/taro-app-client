import { LoginUserData, selectUser, setUser } from "@/entities/user";
import { useLoginMutation } from "@/shared/api";
import { Button, Flex, Form, FormProps, Input, Typography } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import s from "./LoginPage.module.scss";

type FieldType = LoginUserData;

type Props = {};

export const LoginPage: FC<Props> = () => {
  const [login, { isLoading }] = useLoginMutation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    login(values).then((res) => {
      dispatch(setUser(res.data?.user));
    });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Flex className={s.loginPage} justify="center" align="center">
      <Flex gap="large" vertical align="center">
        <Typography.Title level={1} className={s.title}>
          Вход
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
            label="Логин"
            name="identifier"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите имя пользователя или email",
              },
            ]}
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
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};
