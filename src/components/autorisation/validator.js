export function validator(data, config) {
  const errors = {};
  function validate(method, data, config) {
    let status;
    switch (method) {
      case "isRequired":
        status = data.trim() === "";
        break;

      case "isEmail":
        const regExp = /^\S+@\S+\.\S+$/g;
        status = !regExp.test(data);
        break;

      case "min":
        status = data.length < 4;
        break;

      case "max":
        status = data.length > 10;
        break;

      case "hasCapitalLetter":
        const capExp = /[A-Z]+/g;
        status = !capExp.test(data);
        break;

      case "hasDigit":
        const digExp = /\d+/g;
        status = !digExp.test(data);
        break;

      case "minQuals":
        status = data.length === 0;
        break;

      default:
        break;
    }
    if (status) return config.message;
  }
  for (const fieldName in data) {
    for (const validationMethod in config[fieldName]) {
      const error = validate(
        validationMethod,
        data[fieldName],
        config[fieldName][validationMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}

export const validationConfig = {
  login: {
    isRequired: {
      message: "Логин обязателен для заполнения",
    },
    min: {
      message: "Минимальное количество символов - 4",
    },
    max: {
      message: "Максимальное количество символов - 10",
    },
  },
  email: {
    isRequired: {
      message: "Email обязателен для заполнения",
    },
    isEmail: {
      message: "Email введен некорректно",
    },
  },
  password: {
    isRequired: {
      message: "Пароль обязателен для заполнения",
    },
    min: {
      message: "Минимальное количество символов - 4",
    },
    max: {
      message: "Максимальное количество символов - 10",
    },
    hasCapitalLetter: {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    },
    hasDigit: {
      message: "Пароль должен содержать хотя бы одну цифру",
    },
  },
  qualities: {
    minQuals: {
      message: "Необходимо выбрать хотя бы одно качество",
    },
  },
};
