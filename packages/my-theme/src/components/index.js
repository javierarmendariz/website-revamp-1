import React from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Main from './main';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />

      <Head>
        <title>ok</title>
        <meta name="description" content="{state.frontity.description}" />
        <html lang="en" />
      </Head>


      <Global styles={globalStyles} />

      <Switch>
        <Loading when={data.isFetching} />
        <PageError when={data.isError} />
        <Main when={data.isArchive} />
      </Switch>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
