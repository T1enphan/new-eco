import Header from "./Component/Header";
import MenuLeft from "./Component/MenuLeft";
import Footer from "./Component/Footer";
import { useLocation } from "react-router-dom";
import MenuAccount from "./Component/MenuAccount";
function App(props) {
  const duongLink = useLocation();
  // console.log(duongLink);
  return (
    <div>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            {duongLink.pathname.includes(
              "cart"
            ) ? null : duongLink.pathname.includes("account") ? (
              <MenuAccount />
            ) : (
              <MenuLeft />
            )}
            {/* {duongLink["pathname"].includes("account") ? (
              <MenuAccount />
            ) : (
              <MenuLeft />
            )} */}
            {/* <MenuAccount></MenuAccount> */}
            {props.children}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
