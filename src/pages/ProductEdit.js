import axios from "axios";
import { router, useEffect, useState } from "../lib";

const ProductEdit = ({ id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);
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
        axios.put(`http://localhost:3000/products/${id}`, product).then(() => {
          alert("thanh cong");
          router.navigate("/products");
        });
      }
    });
  });
  return /*html*/ ` 
  <div class="container">
  <h1>Product Edit</h1>
  <form action="" id="form">
      <div class="mb-3"><input type="text" placeholder="Name" value="${product.name}" id="name" class="form-control"></div>
      <div class="mb-3"><input type="text" placeholder="Price" value="${product.price}" id="price" class="form-control"></div>
      <div class="mb-3"><input type="text" placeholder="Image" value="${product.image}" id="image" class="form-control"></div>
      <button class="btn btn-danger" type="submit">Submit</button>
  </form>
</div>`;
};

export default ProductEdit;
