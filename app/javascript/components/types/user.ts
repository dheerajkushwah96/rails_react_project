type UserProps = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

type UserResponse = {
  user: UserProps;
};
type UserListResponse = {
  users: UserProps[];
};


export type { UserProps, UserResponse };