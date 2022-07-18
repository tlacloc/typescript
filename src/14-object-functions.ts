(() => {
  const login = (email: string, password: string): void => {
    console.log(`${email} logged in with password ${password}`);
  }

  login('email', 'password');

  // new type:

  const login2 = (data: { email: string, password: string }): void => {
    console.log(`${data.email} logged in with password ${data.password}`);
  }

  login2({ email: 'email', password: 'password' });
})();
