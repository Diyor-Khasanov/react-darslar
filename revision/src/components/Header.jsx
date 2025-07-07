import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <h1>{t("welcome")}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </nav>
    </header>
  );
}

export default Header;
