import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../../translations/en-es/index.json";
import English from "../../translations/en-us/index.json";

export const Context = React.createContext();

const LanguageWrapper = (props) => {
  const [locale, setLocale] = useState("en-es");
  const [messages, setMessages] = useState(Spanish);

  const changeLanguage = (e) => {
    const newLocale = e.target.getAttribute("value");
    setLocale(newLocale);
    newLocale === "en-us" ? setMessages(English) : setMessages(Spanish);
  };
  return (
    <Context.Provider value={{ changeLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default LanguageWrapper;
