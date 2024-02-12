import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mohammed Nabil",
    email: "nabil@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Parvin Akther",
    email: "parvin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
