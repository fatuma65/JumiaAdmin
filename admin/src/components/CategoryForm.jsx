import React, { useState } from "react";
import "./Category.css";

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addCategory = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/category/create/category",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        console.log("Category added successfully");
      } else {
        console.log("Adding failed");
      }
    } catch (error) {
      console.log("An error has occured", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory();
    setFormData({ title: "", description: "" });
  };

  return (
    <>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className="form-survey">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button>Add Category</button>
      </form>
    </>
  );
};

export default CategoryForm;
