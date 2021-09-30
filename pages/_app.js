/*!

=========================================================
* NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================


=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Cookie from "js-cookie";
import Router from "next/router";
import {DataBProvider} from 'components/Context/dataBContext';
import PageChange from "components/PageChange/PageChange.js";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { ToastProvider } from 'react-toast-notifications';
import AppContext from "context/AppContext";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {

  state = {
    datab: "ids",
    user: null,
  };

  setData = (data) => {
    this.setState({datab: data });
  };

  componentDidMount() {
    const token = Cookie.get("token");

    let comment = document.createComment(`
=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================
`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title> IDS Dashboard</title>
        </Head>
        <Layout>
         <ToastProvider
           autoDismiss
           autoDismissTimeout={4000}
           placement="top-center"
         >
          <DataBProvider
             value={{
               data: this.state.datab,
               setData: this.setData
             }}
          >
            <Component {...pageProps} />
          </DataBProvider>
         </ToastProvider>
        </Layout>
      </React.Fragment>
    );
  }
}
