import { UserLogin } from "../interfaces/UserLogin";

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
      const data: LoginResponse = await response.json(); // Ensure data has type { token: string }
      return data; // Return the object containing the token
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