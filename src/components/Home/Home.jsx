import Header from "../Header/Header.jsx";
import PageTitle from "../PageTitle/PageTitle.jsx";
import PLP from "../ProductsListingPage/PLP.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Home.css";
function Home() {
  return (
    <div className="app__container">
      <Header />
      <PageTitle />
      <PLP />
      <Footer />
    </div>
  );
}

export default Home;
