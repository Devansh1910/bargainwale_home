import { useRef, useState } from "react";
import { scrollToTop } from "../../../Functions/helper";
import useEventListener from "../../../Hooks/Helper/useEventListener";
import s from "./ScrollToTop.module.scss";
import SvgIcon from "./SvgIcon";
import ToolTip from "./ToolTip";

const ScrollToTop = () => {
  const scrollTopButtonRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const SCROLL_REQUIRED = 1000;

  function handleScrollTopVisibility() {
    const isScrollAboveThreshold = window.scrollY >= SCROLL_REQUIRED;
    scrollTopButtonRef.current.classList[isScrollAboveThreshold ? 'remove' : 'add'](s.hide);
    setIsVisible(isScrollAboveThreshold);
  }

  useEventListener(window, "scroll", handleScrollTopVisibility, []);

  const openWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      <button
        type="button"
        className={`${s.whatsappButton} ${isVisible ? '' : s.samePosition}`}
        onClick={() => openWhatsApp('9305506538')} 
        aria-label="Open WhatsApp"
      >
        <SvgIcon name="whatsappIcon" />
        <ToolTip top="50%" left="-60px" content="Open WhatsApp" />
      </button>
      <button
        ref={scrollTopButtonRef}
        type="button"
        className={`${s.scrollTopButton} ${s.hide}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <SvgIcon name="arrowUp2" />
        <ToolTip top="50%" left="-60px" content="Scroll to top" />
      </button>
    </>
  );
};

export default ScrollToTop;
