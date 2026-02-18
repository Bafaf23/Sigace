import { auth } from "@/auth";
export default async function DashboarPage() {
  const session = await auth();
  return <h1>Hola en el Dasboard, {session?.user?.name} </h1>;
}
