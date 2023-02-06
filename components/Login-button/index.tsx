import { signIn, signOut, useSession } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Logueado como {session.user.email} <br />
        <br />
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </>
    );
  }
  return (
    <>
      Sesión no iniciada <br />
      <br />
      <button onClick={() => signIn()}>Ingresar</button>
    </>
  );
}
