import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { getShoes } from "../Redux/AppReducer/action";
import "../Styles/Shoes.css"

const Shoes = () => {
  // const shoes = useSelector((state) => state.App.shoes);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getShoes())
  // },[])

  const [searchParams] = useSearchParams();
  const shoes = useSelector((state) => state.App.shoes);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (shoes.length === 0 || location.search) {
      let getTodoParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getShoes(getTodoParams));
    }
  }, [location.search]);
  return (
    <div id="main">
      <Filter id="filter" />
      <div id="shoesCard">
        {
          shoes.length > 0 && shoes.map((singleShoe)=> (
            <div key={singleShoe.id}>
              <Link to={`/shoes/${singleShoe.id}`}>
                 <ShoeCard shoesData={singleShoe}></ShoeCard>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Shoes;
