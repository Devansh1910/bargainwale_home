import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { productsData } from "../../Data/productsData";
import { updateState } from "../../Features/productsSlice";
import { searchByObjectKey } from "../../Functions/helper";
import s from "./Nav.module.scss";

const Nav = () => {
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);

  const handleSearch = (query) => {
    if (!query) {
      // Optionally handle the empty query case, like clearing search results
      return;
    }

    let productsFound = searchByObjectKey({
      data: productsData,
      key: "shortName",
      query: query,
    });

    if (productsFound.length === 0) {
      productsFound = searchByObjectKey({
        data: productsData,
        key: "category",
        query: query,
      });
    }

    dispatch(updateState({ key: "searchProducts", value: productsFound }));
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className={s.nav}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li>
          {isSignIn ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/signup">Sign Up</NavLink>
          )}
        </li>
        <li className={s.searchBarLi}>
          <div className={s.searchContainer}>
            <input
              ref={searchRef}
              type="text"
              placeholder="What are you looking for?"
              className={s.searchInput}
              onChange={(e) => handleSearch(e.target.value.trim().toLowerCase())}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
