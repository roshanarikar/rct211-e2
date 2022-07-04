import React, { useEffect, useState } from "react";
import "../Styles/Shoes.css"
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(urlCategory || []);

  const handleCheckBox = (e) => {
    const option = e.target.value;

    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  

  useEffect(() => {
    if (category) {
      setSearchParams({ category: category });
    }
  }, [category, dispatch, setSearchParams]);

  useEffect(() =>{
    if(category){
      let params = {};
      category && (params.category = category)
      setSearchParams(params);
    }
  },[category,dispatch,setSearchParams])

  return (
    <div id="filter">
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" onChange={handleCheckBox} defaultChecked={category.includes("Sneakers")} value="Sneakers" />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" onChange={handleCheckBox} defaultChecked={category.includes("Loafers")} value="Loafers" />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" onChange={handleCheckBox} defaultChecked={category.includes("Canvas")} value="Canvas" />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" onChange={handleCheckBox} defaultChecked={category.includes("Boots")} value="Boots" />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
