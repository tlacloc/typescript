(() => {
  let dinamicData: string | number | boolean;

  function getData(data: string | number | boolean) {
    if (typeof data === 'string') {
      return data.toLocaleLowerCase();
    } else if (typeof data === 'number') {
    } else if (typeof data === 'boolean') {
    }
  }

  getData('data');
})();
