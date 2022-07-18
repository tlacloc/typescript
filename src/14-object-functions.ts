(() => {
  const login = (email: string, password: string): void => {
    console.log(`${email} logged in with password ${password}`);
  }

  login('email', 'password');

  // new type:
  let users: any[] = [];

  const login2 = (data: { email: string, password: string, gender?: string }): void => {
    users.push(data);
  }

  login2({ email: 'email', password: 'password' });
  login2({ email: 'email2', password: 'password2', gender: 'male' });
})();
