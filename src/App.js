import Header from "./Component/Header";
import MenuLeft from "./Component/MenuLeft";
import Footer from "./Component/Footer"
function App(props) {
  return (
    <div>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <MenuLeft></MenuLeft>
            {props.children}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
