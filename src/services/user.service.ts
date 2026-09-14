import type { User } from "@/types/user";

// ponytail: empty in-memory source keeps scaffold honest until persistence is specified.
export async function listUsers(): Promise<User[]> {
  return [];
}
