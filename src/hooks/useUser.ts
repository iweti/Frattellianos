"use client";

import { useEffect, useState } from "react";

import { getJson } from "@/lib/api";
import type { User } from "@/types/user";

export function useUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJson<{ users: User[] }>("/api/users")
      .then(({ users }) => setUsers(users))
      .catch(() => setUsers([]))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
}
