// Head
import Head from "next/head";
import PropTypes from "prop-types";

const Seo = ({ content, title, icon }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content={content} />
        <title>{title}</title>
        <link rel="icon" href={icon} />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

Seo.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Seo;
