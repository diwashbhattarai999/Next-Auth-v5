"use client";

import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button type="submit" onClick={onClick}>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
