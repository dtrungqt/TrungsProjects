import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";

import "@/styles/globals.css";
import "@/components/ScheduleForm.scss";
import "@/components/Footer.scss";
import "@/components/ScheduleContent.scss";
import "@/components/UI/Button.scss";
import "@/components/UI/InputText.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Baydidau - Nguyen Dinh Trung</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
