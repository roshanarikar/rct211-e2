import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getShoes } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.App.shoes);
  const [ currentShoe, setCurrentShoe ] = useState({});

  useEffect(() =>{
      if(shoes?.length ===0){
          dispatch(getShoes())
;        }
  }, [shoes?.length, dispatch])

  useEffect(() => {
      if(id){
          const temp = shoes.find((shoe) => shoe.id ===Number(id))
          temp && setCurrentShoe(temp)
      }
  },[shoes, id]);

  return (
    <div id="SingleShoe">
      <h2>{currentShoe?.name}</h2>
      <div>
        <img src={currentShoe?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentShoe.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
