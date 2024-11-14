import { UserLogin } from "../interfaces/UserLogin";

// Define the LoginResponse interface here
interface LoginResponse {
  token: string;
}

const login = async (userInfo: UserLogin): Promise<LoginResponse | null> => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (response.ok) {
      const data: LoginResponse = await response.json();
      return data; // Return the object with the token
    } else {
      console.error("Login failed:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};

export { login };