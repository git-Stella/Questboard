import Router from "./router.js";
import Navigation from "./navigation.js";
import LoginView from "./views/login.js";
import RegisterView from "./views/register.js";

customElements.define('router-outlet', Router);
customElements.define('navigation-outlet', Navigation);
customElements.define('login-view', LoginView);
customElements.define('register-view', RegisterView);
