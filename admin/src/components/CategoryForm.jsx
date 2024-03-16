import React, { useState , useEffect} from "react";
import "./Category.css";

const CategoryForm = () => {
 const [formData, setFormData] = useState({
  title: '',
  subCategoryId: 0,

 })
  const [subcategory, setSubCategory] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // fetching sub categories
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:4000/category/get/subcategory"
        );
        const data = await response.json();
        console.log(data);
        setSubCategory(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
 
  const addCategory = async () => {
    try {
    //  creating nested sub categories from sub categories
      const response = await fetch(
        "http://localhost:4000/category/create/nestedsubcategory",
        {
          method: "POST",
          body: JSON.stringify(formData ),
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
      console.log("An error has occured adding category", error);
    }
  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  if (loading) {
    return <h4>Loading....</h4>
  }

  return (
    <>
      
      <form onSubmit={handleSubmit} className="form-survey">
      <h2>Add Nested sub Category</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={formData.title}
          placeholder="add the nested category"
          onChange={handleChange}
          required
        />
          <label>
          Sub Category</label>
          <select
            name="subCategoryId"
            onChange={handleChange}
            value={formData.subCategoryId}
            className="form-select form-select-sm"
          >
            <option value="">Select sub Category</option>
            {subcategory.map((category) => (
              <option key={category.id} value={category.id} className="option1">
                {category.name}
              </option>
            ))}
          </select>
        
        <button onClick={handleSubmit} className="btn btn-dark">
         add nested category
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
