import axios from "axios";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type UserResponse = {
  data: User[];
  page: number;
  total_pages: number;
};

const getUsers = async (page: number): Promise<UserResponse> => {
  const response = await axios.get<UserResponse>(
    `https://reqres.in/api/users?page=${page}`
  );
  return response.data;
};

export default getUsers;
