import { useUser } from "@clerk/nextjs";
import { Avatar } from "./ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();

  return <Avatar></Avatar>;
};
