import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<string | null> => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    // Check if login was successful
    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      return token; // Return the JWT token
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