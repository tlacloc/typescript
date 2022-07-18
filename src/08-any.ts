(() => {
  let anyValue: any = "";
  anyValue = 1;
  anyValue = true;
  anyValue = {};
  anyValue = [];
  anyValue = () => {};
  console.log(anyValue);
})();
