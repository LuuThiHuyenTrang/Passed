import axios from "axios";
import { router, useEffect } from "../lib";

const SignUp = () => {
  useEffect(() => {
    document.querySelector("#form").addEventListener("submit", (e) => {
      e.preventDefault();
      const product = {
        name: document.querySelector("#name").value,
        pass: document.querySelector("#pass").value,
        confirmpass: document.querySelector("#confirmpass").value,
      };
      if (product.name == "") {
        alert("Moi nhap name");
      } else if (product.pass == "") {
        alert("Moi nhap pass");
      } else if (product.confirmpass == "") {
        alert("Moi nhap confirmpass");
      } else if (product.pass != product.confirmpass) {
        alert("Mat khau khong trung khop");
      } else {
        alert("thanh cong");
        router.navigate("/products");
      }
    });
  });
  return /*html*/ ` 
  <div class="container">
  <h1>Sign Up</h1>
  <form action="" id="form">
      <div class="mb-3"><input type="text" placeholder="Name" name="" id="name" class="form-control"></div>
      <div class="mb-3"><input type="password" placeholder="Pass" name="" id="pass" class="form-control"></div>
      <div class="mb-3"><input type="password" placeholder="confirmpass" name="" id="confirmpass" class="form-control"></div>
      <button class="btn btn-danger" type="submit">Submit</button>
  </form>
</div>`;
};

export default SignUp;
