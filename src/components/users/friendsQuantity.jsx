function FriendsQuantity({ count, chosenProf }) {
  const renderPhrase = (numb) => {
    const lastNumber = Number(numb.toString().slice(-1));
    if (chosenProf === null) {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга`;
      }
      return `У тебя ${numb} друзей`;
    }
    if (chosenProf.name === "Доктор") {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей докторов`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг доктор`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга доктора`;
      }
      return `У тебя ${numb} друзей докторов`;
    }
    if (chosenProf.name === "Официант") {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей официантов`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг официант`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга официанта`;
      }
      return `У тебя ${numb} друзей официантов`;
    }
    if (chosenProf.name === "Физик") {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей физиков`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг физик`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга физика`;
      }
      return `У тебя ${numb} друзей физиков`;
    }
    if (chosenProf.name === "Инженер") {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей инженеров`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг инженер`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга инженера`;
      }
      return `У тебя ${numb} друзей инженеров`;
    }
    if (chosenProf.name === "Актер") {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей актеров`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг актер`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга актера`;
      }
      return `У тебя ${numb} друзей актеров`;
    }
    if (chosenProf.name === "Повар") {
      if (numb > 4 && numb < 15) {
        return `У тебя ${numb} друзей поваров`;
      }
      if (lastNumber === 1) {
        return `У тебя ${numb} друг повар`;
      }
      if ([2, 3, 4].indexOf(lastNumber) >= 0) {
        return `У тебя ${numb} друга повара`;
      }
      return `У тебя ${numb} друзей поваров`;
    }
  };

  return (
    <div className={"badge friends bg-" + (count > 0 ? "primary" : "danger")}>
      {count > 0 ? renderPhrase(count) : "У тебя нет таких друзей"}
    </div>
  );
}

export default FriendsQuantity;
