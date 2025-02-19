import { useSelector } from "react-redux";
import IconWithCount from "../NavTools/IconWithCount";
import SearchProductsInput from "../NavTools/SearchProductsInput";
import UserMenuIcon from "../NavTools/UserMenuIcon";
import s from "./NavTools.module.scss";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { cartProducts, favoritesProducts } = useSelector(
    (state) => state.products
  );

  return (
    <div className={s.navTools}>
      {/* <SearchProductsInput /> */}

      <div className={s.tools}>
        <IconWithCount
          props={{
            visibility: showHeart,
            iconName: "heart",
            routePath: "/favorites",
            countLength: favoritesProducts.length,
            title: "favorite",
          }}
        />
        <IconWithCount
          props={{
            visibility: showCart,
            iconName: "cart3",
            routePath: "/cart",
            countLength: cartProducts.length,
            title: "cart",
          }}
        />

        <UserMenuIcon visibility={showUser} />
      </div>
    </div>
  );
};

export default NavTools;
