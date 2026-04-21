import Header from "../Header/Header.jsx";
import PageTitle from "../PageTitle/PageTitle.jsx";
import PLP from "../ProductsListingPage/PLP.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Home.css";

import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function Home() {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <PageTitle />
      <PLP />
      <Footer />
    </>
  );
}

export default Home;
