import React from "react";
import SubmitButton from "../components/autorisation/submitButton";
import TextField from "../components/autorisation/textField";
import FormHeader from "../components/autorisation/formHeader";
import * as yup from "yup";

const EnterForm = () => {
  const [data, setData] = React.useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const hasError = Object.keys(errors).length;

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Пароль обязателен для заполнения")
      .min(4, "Минимальное количество символов - 4")
      .max(10, "Максимальное количество символов - 10")
      .matches(
        /[A-Z]+/g,
        "Пароль должен содержать хотя бы одну заглавную букву"
      )
      .matches(/[0-9]+/g, "Пароль должен содержать хотя бы одну цифру"),
    login: yup
      .string()
      .required("Логин обязателен для заполнения")
      .min(4, "Минимальное количество символов - 4")
      .max(10, "Максимальное количество символов - 10"),
  });

  React.useEffect(() => {
    validate();
  }, [data]);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) return;
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="autorisation">
        <FormHeader />
        <TextField
          handleChange={handleChange}
          value={data.login}
          type="text"
          name="login"
          label="Введите ваш логин"
          error={errors.login}
        />
        <TextField
          handleChange={handleChange}
          value={data.password}
          type="password"
          name="password"
          label="Введите ваш пароль"
          error={errors.password}
        />
        <SubmitButton disabled={hasError} type="submit" text="Войти" />
      </form>
    </>
  );
};

export default EnterForm;
