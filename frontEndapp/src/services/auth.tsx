import axios from "axios";

class AuthService {
    async registerUser(username: string, email: string, password: string) {
        try {
          const response = await axios.post(
            "React.https://email-visor-backend.vercel.app/api/v1/users/register",
            {
              username,
              email,
              password,
            }
          );
          const user = response.data;
          return user;
        } catch (error) {
            console.error("Register failed:", error);
            throw error;
        }
      }
    async login(email:string, password:string) {
        try {
          const response = await axios.post("React.https://email-visor-backend.vercel.app/api/v1/users/login", {
            email,
            password,
          });
          
          const { token, error } = response.data;
          console.log(response.data)
          if (token) {
            // Login successful, return the user object or the token
            const user = { email, token };
            return user;
          } else {
            // Login failed, return the error message
            throw new Error(error);
          }
        } catch (error) {
          console.error("Login failed:", error);
          throw error;
        }
      }
    
      async logout() {
        // You can implement the logout logic here if necessary
      }
}
export default new AuthService();