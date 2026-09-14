import { listUsers } from "@/services/user.service";

export async function GET() {
  return Response.json({ users: await listUsers() });
}
