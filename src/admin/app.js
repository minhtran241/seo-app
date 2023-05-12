import AuthLogo from "./extensions/auth-logo.png";
import MenuLogo from "./extensions/menu-logo.png";
import favicon from "./extensions/favicon.ico";

const config = {
  locales: ["vi"],
  auth: {
    logo: AuthLogo,
  },
  menu: {
    logo: MenuLogo,
  },
  theme: {
    colors: {
      primary100: "#eaf5ff",
      primary200: "#b8e1ff",
      primary500: "#66b7f1",
      primary600: "#0c75af",
      primary700: "#006096",
      buttonPrimary500: "#1D4CB1",
      buttonPrimary600: "#0054A6",
      danger700: "#006096",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
  head: {
    favicon: favicon,
  },
  translations: {
    vi: {
      "app.components.LeftMenu.navbrand.title": "Pama dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Quản trị nội dung",
      "Auth.form.email.placeholder": "ví dụ: pama@admin.com",
      "Auth.form.welcome.title": "Chào mừng đến với Pama!",
      "Auth.form.welcome.subtitle":
        "Đăng nhập vào tài khoản hệ quản trị nội dung Pama của bạn",
      "app.components.HomePage.welcomeBlock.content.again":
        "Chào mừng bạn đến với hệ quản trị nội dung Pama!",
    },
    en: {
      "Auth.form.email.placeholder": "e.g. pama@admin.com",
      "Auth.form.welcome.title": "Welcome to Pama Admin!",
      "Auth.form.welcome.subtitle": "Log in to your Pama Admin account",
      "app.components.LeftMenu.navbrand.title": "Pama dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Admin panel",
      "app.components.HomePage.welcomeBlock.content.again":
        "Welcome to your Pama content management dashboard!",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};
x;
export default {
  config,
  bootstrap,
};
