import React from "react";
import SubmitButton from "../components/autorisation/submitButton";
import TextField from "../components/autorisation/textField";
import FormHeader from "../components/autorisation/formHeader";
import SelectForm from "../components/autorisation/selectForm";
import RadioField from "../components/autorisation/radioField";
import CheckField from "../components/autorisation/checkField";
import {
  validator,
  validationConfig,
} from "../components/autorisation/validator";

const RegistrationForm = () => {
  const [data, setData] = React.useState({
    login: "",
    email: "",
    password: "",
    profession: "Не имею постоянной работы",
    sex: "Мужской",
    qualities: [],
  });
  const [errors, setErrors] = React.useState({});
  const hasError = Object.keys(errors).length;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChangeQual = (e) => {
    let quals = data.qualities;
    if (quals.includes(e.target.value)) {
      setData((prev) => ({
        ...prev,
        qualities: quals.filter((qual) => qual !== e.target.value),
      }));
    } else {
      quals.push(e.target.value);
      setData((prev) => ({ ...prev, qualities: quals }));
    }
  };

  const validate = () => {
    const errors = validator(data, validationConfig);

    setErrors(errors);
    return Object.keys(errors).length;
  };

  React.useEffect(() => {
    validate();
  }, [data]);

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
          type="text"
          name="login"
          label="Придумайте ваш логин"
          value={data.login}
          error={errors.login}
          handleChange={handleChange}
        />
        <TextField
          type="text"
          name="email"
          label="Укажите ваш email"
          value={data.email}
          error={errors.email}
          handleChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          label="Создайте пароль"
          value={data.password}
          error={errors.password}
          handleChange={handleChange}
        />
        <SelectForm
          label="Выберите свою профессию"
          name="profession"
          value={data.profession}
          error={errors.profession}
          handleChange={handleChange}
          defaultValue="Не имею постоянной работы"
        />
        <RadioField
          value={data.sex}
          handleChange={handleChange}
          name="sex"
          options={["Мужской", "Женский"]}
        />
        <CheckField
          handleChangeQual={handleChangeQual}
          name="qualities"
          error={errors.qualities}
        />
        <SubmitButton
          disabled={hasError}
          type="submit"
          text="Зарегистрироваться"
        />
      </form>
    </>
  );
};

export default RegistrationForm;
