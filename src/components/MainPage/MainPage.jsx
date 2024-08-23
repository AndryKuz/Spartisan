import style from "./MainPage.module.scss";
import { ReactComponent as Arrow } from "../../assets/images/ExpandDown.svg";

const MainPage = () => {

  const handleScroll = () => {
    const mainElement = document.querySelector('main');
      if (mainElement) {
        window.scrollTo({
          top:mainElement.offsetTop,
          behavior:'smooth'
        })
      }
    }
  

  return (
    <section className={style.pageParent}>
      <div className={style.mainPage}>
        <h3>The art of restoring the body through</h3>
        <h2>bath procedures</h2>
        <div>
          <span></span>
        </div>
        <Arrow onClick={handleScroll} />
      </div>
    </section>
  );
};

export default MainPage;
