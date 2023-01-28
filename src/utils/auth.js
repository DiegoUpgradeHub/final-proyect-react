export let users = [
  { email: "usuario1@test.com", password: "000", name: "Usuario 1" },
  { email: "usuario2@test.com", password: "123", name: "Usuario 2" },
  { email: localStorage.email, password: localStorage.password }
];

export function signIn(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}