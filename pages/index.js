// Head
import Head from "next/head";
// PropTypes
import PropTypes from "prop-types";
// server
import { server } from "../confing/index";
// Style
import styles from "../styles/Home.module.css";

function Home({ global }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Bringing back the weird web one post at a time."
        />
        <title>Fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section-main">
        {global.map((item) => (
          <div key={item.id}>
            <div className="">{item.title}</div>
          </div>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/`);
  const global = await res.json();

  return {
    props: {
      global,
    },
  };
};

Home.propTypes = {
  global: PropTypes.array,
};

export default Home;
