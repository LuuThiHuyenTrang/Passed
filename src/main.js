import { render, router } from "./lib";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import ProductList from "./pages/ProductList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// import 'bootstrap/dist/css/bootstrap.min.css'
const app = document.querySelector("#app");
router.on("/products", () => render(ProductList, app));
router.on("/products/add", () => render(ProductAdd, app));
router.on("/products/edit/:id", ({ data }) =>
  render(() => ProductEdit(data), app)
);
router.on("/signIn", () => render(SignIn, app));
router.on("/signUp", () => render(SignUp, app));
router.resolve();
