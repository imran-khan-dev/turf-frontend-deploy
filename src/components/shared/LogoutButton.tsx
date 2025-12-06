"use client";

import { logoutUser } from "@/services/auth/logout";
import { Button } from "../ui/button";

type LogoutButtonProps = {
  role: "owner" | "manager" | "turfUser" | "admin";
};

const LogoutButton = ({ role }: LogoutButtonProps) => {
  const handleLogout = async () => {
    await logoutUser(role);
  };
  return (
    <Button variant={"destructive"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
