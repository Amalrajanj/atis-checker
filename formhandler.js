let handlenum = (input) => {
  let regex = /[a-zA-Z]/gi;
  input.value = input.value.replace(regex, "");
};
