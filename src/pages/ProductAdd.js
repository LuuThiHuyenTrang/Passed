import axios from "axios";
import { router, useEffect, useState } from "../lib";

const ProductAdd = () => {
  useEffect(() => {
    document.querySelector("#form").addEventListener("submit", (e) => {
      e.preventDefault();
      const product = {
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
        image: document.querySelector("#image").value,
      };
      if (product.name == "") {
        alert("Moi nhap name");
      } else if (product.price == "") {
        alert("Moi nhap price");
      } else if (product.price <= 0) {
        alert("Moi nhap price>0 ");
      } else if (product.image == "") {
        alert("Moi nhap image");
      } else {
        axios.post(`http://localhost:3000/products/`, product).then(() => {
          alert("thanh cong");
          router.navigate("/products");
        });
      }
    });
  });
  return /*html*/ ` 
  <div class="container">
        <h1>Product Add</h1>
        <form action="" id="form">
            <div class="mb-3"><input type="text" placeholder="Name" name="" id="name" class="form-control"></div>
            <div class="mb-3"><input type="text" placeholder="Price" name="" id="price" class="form-control"></div>
            <div class="mb-3"><input type="text" placeholder="Image" name="" id="image" class="form-control"></div>
            <button class="btn btn-danger" type="submit">Submit</button>
        </form>
    </div>`;
};

export default ProductAdd;
