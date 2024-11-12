import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded || !decoded.exp) return true;

      const expirationDate = decoded.exp * 1000; // Convert to milliseconds
      return Date.now() > expirationDate;
    } catch (err) {
      console.error("Error decoding token:", err);
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); // Redirect to home page
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login'); // Redirect to login page
  }
}

export default new AuthService();