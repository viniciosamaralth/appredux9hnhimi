import axios from "../utils/axios";

class AuthService {
  signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/home/login", { email, password }) //envio o token pelo header
        .then((response) => {
          if (response.data.user) {
            this.setToken("JWT");
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/home/me") //envio o token pelo header
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  signOut = () => {
    this.removeToken();
  };

  setToken = (token) => {
    localStorage.setItem("acessToken", token);
  };

  removeToken = () => localStorage.removeItem("acessToken");

  getToken = () => localStorage.getItem("acessToken");

  isAuthenticated = () => {
    return !!this.getToken();
  };
}

const authService = new AuthService();

export default authService;
