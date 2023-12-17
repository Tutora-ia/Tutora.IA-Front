'use server'

import { sealData, unsealData } from "iron-session";
import { cookies } from "next/headers";

const sessionPassword = process.env.SESSION_PASSWORD;
if (!sessionPassword) throw new Error("SESSION_PASSWORD NÃO EXISTE");

export async function getSession() {
  const encryptedSession = cookies().get('auth_session')?.value;

  const session = encryptedSession
    ? await unsealData(encryptedSession, {
        password: sessionPassword,
      })
    : null;

  return session ? JSON.parse(session) : null;
}

export async function setSession(credentials) {
  const encryptedSession = await sealData(JSON.stringify(credentials), {
    password: sessionPassword,
  });

  cookies().set('auth_session', encryptedSession, {
    sameSite: 'strict',
    httpOnly: true,
    secure: true,
    maxAge: 2592000
  });
}
