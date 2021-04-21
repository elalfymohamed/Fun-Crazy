// Next
import Image from "next/image";
// PropTypes
import PropTypes from "prop-types";
// Style
import styled from "styled-components";
// server
import { server } from "../confing/index";
// component
import { SEO, Hero } from "../components";

function Home({ hero }) {
  return (
    <>
      <SEO
        content="Bringing back the weird web one post at a time."
        title="Fun.Info"
        icon="/favicon.ico"
      />

      <H1>Fun.Info</H1>
      <Main>
        <H3>Ideas from a bored coder</H3>
        <Grid>
          {hero.map((item) => (
            <Hero key={item.id} {...item} />
          ))}
        </Grid>
      </Main>
      <Footer>
        <By>
          Made with
          <span role="img" aria-label="heart">
            ❤️
          </span>
          by
          <Link href="https://" target="_blank" rel="noopener noreferrer">
            Alfy
          </Link>
        </By>
        <Contact>
          Contact:
          <Link
            href="mailto:hi@fun.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            hi@fun.info
          </Link>
        </Contact>
        <a
          href="https://"
          aria-label="Buy Me a Coffee link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/home/buy-me-a-coffee.svg"
            alt="Buy Me a Coffee link"
            width={30}
            height={30}
          />
        </a>
      </Footer>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/`);
  const hero = await res.json();

  return {
    props: {
      hero,
    },
  };
};

Home.propTypes = {
  hero: PropTypes.array,
};

// Styles

const H1 = styled.h1`
  font-size: 48px;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
`;

const Main = styled.main`
  display: block;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 150px);
  color: #333;
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 0;
`;

const Grid = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const Footer = styled.footer`
  margin-top: 1rem;
  text-align: center;
  padding: 20px;
  margin-bottom: 40px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  color: #333;
`;

const By = styled.div`
  font-size: 25px;
`;

const Link = styled.a`
  text-decoration: underline;
  margin-left: 4px;
`;

const Contact = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default Home;
