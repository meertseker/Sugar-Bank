"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";

export const signIn = async () => {
  try {
    
  } catch (error) {
      console.error("Error:",error)
  }
}

export const signUp = async (userData: SignUpParams) => {

  const {email,password,firstName,lastName} = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(), 
      userData.email, 
      userData.password, 
      `${firstName} ${lastName}`,
    );

    const session = await account.createEmailPasswordSession(email, password);
  
    cookies().set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  } catch (error) {
      console.error("Error:",error)
  }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}


