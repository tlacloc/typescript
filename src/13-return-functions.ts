(() => {

  const calcTotal = (price: number[]): number => {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
      total += price[i];
    }
    return total;
  }

  const rta = calcTotal([1, 2, 3, 4, 5]);

  const printTotal = (prices: number[]): void => {
    console.log(calcTotal(prices));
  }

})();
