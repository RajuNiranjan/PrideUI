/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUser } from "@/redux/reducers/auth.reducer";
import { AppDispatch, RootState, store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { FC } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token && !user) {
      dispatch(fetchUser(token));
    }

    // Redirect logic
    if (user) {
      router.push(`/${user.userName}`);
    } else if (!token) {
      router.push("/");
    }
  }, [dispatch, router, user]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
