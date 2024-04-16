import React from 'react'; // Ensure React is imported if you're using JSX
import { allProductsCustomizations } from "../../Data/staticData";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";
import ExploreProducts from "../Home/ProductPoster/ExploreProducts";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./ProductsPage.module.scss";
import CategoriesSectionForProducts from "../Home/CategoriesSection/CategorySectionForProducts"; // Ensure the import path matches your project structure

const ProductsPage = () => {
  useScrollOnMount(200);

  return (
    <div className="container">
      <main className={s.productsPage}>
        <PagesHistory history={["/", "Products"]} />

        <CategoriesSectionForProducts /> {/* Added CategoriesSection here */}

        <section className={s.products}>
          <ExploreProducts customization={allProductsCustomizations} />
        </section>
      </main>
    </div>
  );
};
export default ProductsPage;
