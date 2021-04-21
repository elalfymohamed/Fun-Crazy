/* eslint-disable jsx-a11y/anchor-is-valid */
// next
import Link from "next/link";
// PropTypes
import PropTypes from "prop-types";
// Styled
import styled from "styled-components";

const Hero = ({ title, ulr, src }) => {
  return (
    <Link href={`/${ulr}`}>
      <a>
        <Div>
          <Img src={src} />
          <Title>{title}</Title>
        </Div>
      </a>
    </Link>
  );
};
// propTypes
Hero.propTypes = {
  title: PropTypes.string,
  ulr: PropTypes.string,
  src: PropTypes.string,
};
// Styled
const Div = styled.div`
  position: relative;
  background: #fff;
  height: 140px;
  overflow: hidden;
`;

const Img = styled.div`
  background-image: url("${(props) => (props.src ? props.src : "/")}");
  background-repeat: repeat, no-repeat;
  background-color: rgba(237, 237, 237);
  background-position: center center;
  background-size: auto 100%;
  height: 140px;
  width: 100%;
  position: static;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Title = styled.div`
  background: #fff;
  padding: 14px 20px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  white-space: nowrap;
  font-size: 20px;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  z-index: 2;
  color: rgba(51, 51, 51);
`;

export default Hero;
