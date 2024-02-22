import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./ProductStyles.css";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
    categoryId: 0,
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:4000/category/get/category"
        );
        const data = await response.json();
        console.log(data);
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileChange = (e) => {
    console.log(e.target.files);
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("categoryId", formData.categoryId);

    const response = await fetch(
      "http://localhost:4000/products/create/product",
      {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "appication/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("An error has occured");
    }
  };

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="product-form"
        encType="multipart/form-data"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          value={formData.description}
          onChange={handleChange}
          cols={40}
          rows={5}
          id="description"
          name="description"
          className="form-control"
        />
        <input type="file" id="image" name="image" onChange={fileChange} />
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>
          Category
          <select
            name="categoryId"
            onChange={handleChange}
            value={formData.categoryId}
            className="form-select form-select-lg"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </label>
        <button type="button" class="btn btn-dark">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
