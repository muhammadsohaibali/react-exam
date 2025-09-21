import { createContext } from "react";

interface UserLoginData {
  email: string;
  password: string;
}

interface UserRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface User {
  name: string;
  email: string;
  password: string;
}

let user = {};

const authControllers = {
  checkAuth() {
    return !!localStorage.getItem("isLoggedIn");
  },

  login(userCredentials: UserLoginData) {
    const { email, password } = userCredentials;

    let users: User[] = [];
    const rawUsers = localStorage.getItem("users");
    if (rawUsers) users = JSON.parse(rawUsers);

    const existingUser = users.find((user) => user.email === email);
    if (!existingUser) throw new Error("Invalid email or password");

    if (existingUser.password !== password)
      throw new Error("Invalid email or password");

    user = existingUser;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(existingUser));
  },

  register(userData: UserRegisterData) {
    const { name, email, password, confirmPassword } = userData;
    if (password !== confirmPassword) throw new Error("Passwords do not match");

    let users: User[] = [];
    const rawUsers = localStorage.getItem("users");
    if (rawUsers) users = JSON.parse(rawUsers);

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) throw new Error("Email already exists");

    const newUser = { name, email, password };
    users.push(newUser);

    user = newUser;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
  },

  logout() {
    user = {};
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  },
};

(() => {
  const users: User[] = [];
  localStorage.setItem("users", JSON.stringify(users));
})();

const authContext = createContext({ user, authControllers });

export default authContext;
