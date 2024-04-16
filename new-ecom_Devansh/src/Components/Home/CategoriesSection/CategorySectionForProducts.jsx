import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import s from "./CategoriesSectionForProduct.module.scss";
import CategoriesSlider from "./CategoriesSlider";

const CategoriesSectionForProducts = () => {
  return (
    <section className={s.CategoriesSectionForProducts}>
        <div className={s.wrappercategoryinsider}>
            <SectionTitle eventName="Explore" sectionName="Explore Category" />
        </div>
      <CategoriesSlider />
    </section>
  );
};
export default CategoriesSectionForProducts;
