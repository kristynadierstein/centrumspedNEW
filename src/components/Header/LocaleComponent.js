import React from "react";
import { Link } from "gatsby";
import LocaleContext from "../../context/LocaleProvider";
import { LanguageSwitcherContainer } from "./MainNavigation.css";

const LocaleComponent = ({ location, customStyle }) => {
  const lang = React.useContext(LocaleContext);
  const i18n = lang.i18n[lang.locale];

  return (
    <LanguageSwitcherContainer>
      {i18n.locale === "en-gb" ? (
        <>
          <p
            style={{ customStyle }}
            className="Header__LanguageSwitcher-button current"
          >
            EN{" "}
          </p>
          <Link
            to={`${
              location.pathname.includes("/en")
                ? location.pathname.replace("/en", "")
                : location.pathname
            }`}
            className="Header__LanguageSwitcher-button"
          >
            <p style={{ customStyle }}> / CZ</p>
          </Link>
        </>
      ) : i18n.locale === "cs-cz" ? (
        <>
          <Link
            to={`/en${location.pathname}`}
            className="Header__LanguageSwitcher-button"
          >
            <p style={{ customStyle }}>EN </p>
          </Link>

          <p
            style={{ customStyle }}
            className="Header__LanguageSwitcher-button current"
          >
            {" "}
            / CZ
          </p>
        </>
      ) : (
        ""
      )}
    </LanguageSwitcherContainer>
  );
};

export default LocaleComponent;
