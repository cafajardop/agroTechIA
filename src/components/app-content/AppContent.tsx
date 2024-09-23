import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, LoginPage } from "@pages/index";
import { Header } from "@components/header/Header";
import styles from "./AppContent.module.scss";
import globalStyles from "../../scss/_globales.module.scss";
import { Footer } from "@components/footer/Footer";
import { Download } from "@components/download-page/Download";
import { ButtonWhatsapp } from "@components/controls/button-whatsapp/ButtonWhatsapp";
import { ProfilePage } from "@components/profile";


export const AppContent = () => {
  const authStatus = "not-authenticated";

  return (
    <Router>
      <ButtonWhatsapp />
      <Header />
      <main
        className={`${globalStyles.contenedor} ${styles["contenido-principal"]}`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          
          {authStatus === "not-authenticated" ? (
            <Route path="/auth/*" element={<LoginPage />} />
          ) : (
            <Route path="/*" element={<ProfilePage />} />
          )}
        </Routes>
      </main>

      <Download />

      <Footer />
    </Router>
  );
};
