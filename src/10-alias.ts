(() => {
  type UserId = string | number;

  let userId: UserId = "";


  function getUser(id: UserId) {
    if (typeof id === 'string') {
      return id.toLocaleLowerCase();
    } else if (typeof id === 'number') {
      return id.toString();
    }
  }

  getUser(userId);

  let shirtColors: 'red' | 'blue' | 'green' = 'red';

  shirtColors = 'blue';
  shirtColors = 'green';
  // shirtColors = 'yellow';

  function getShirtColor(color: 'red' | 'blue' | 'green') {
    return color;
  }
})();
