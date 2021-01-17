import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import { themes } from "../theme/themes";

import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import { ConfigProvider } from "antd";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ colors }) => colors.background};
  }
`;

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { value, enable, disable } = useDarkMode(false, { storageKey: null });
  const theme = value ? "dark" : "light";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const body = (
    <>
      <GlobalStyle colors={themes[theme]["colors"]} />
      <ConfigProvider>
        <ThemeProvider theme={themes[theme]}>
          <Provider store={store}>
            <Component
              {...pageProps}
              darkMode={value}
              enableDarkMode={enable}
              disableDarkMode={disable}
            />
          </Provider>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );

  // prevents ssr flash for mismatched dark mode
  if (!isMounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default MyApp;
