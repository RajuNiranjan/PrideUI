/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUser } from "@/redux/reducers/auth.reducer";
import { AppDispatch, store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppContent Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

export default App;

type AppContentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
  pageProps: any;
};

const AppContent: FC<AppContentProps> = ({
  Component,
  pageProps,
}: AppContentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [dispatch]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
