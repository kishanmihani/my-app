import { User } from "../types";

const getUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  return data.json();
};

export default getUsers;