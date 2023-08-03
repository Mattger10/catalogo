import { useState } from "react";
import logo3 from "../../assets/images/illustration-sign-up-desktop.svg";
import logo4 from "../../assets/images/illustration-sign-up-mobile.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      setErrorMessage("Valid email required");
    } else {
      setErrorMessage("");
      setShowModal(true);
    }
  };

  return (
    <Div1>
          <Link to="/"> <HomeOutlinedIcon sx={{position: "absolute", color: "#fff", marginLeft: "-24rem", marginTop: "-28.2rem", fontSize: 36, "&:hover": {color: "#FF6155"}}} /> </Link>
    <Div>
      <Img2 src={logo4} alt="" />

      <H1 style={{ fontFamily: "Roboto, sans-serif" }}>Stay updated!</H1>
      <Container>
        <P style={{ fontFamily: "Roboto, sans-serif" }}>
          Join 60,000+ product managers receiving monthly updates on:
        </P>
        <Ul>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
                />
            </g>
          </Svg>{" "}
          <Li style={{ fontFamily: "Roboto, sans-serif" }}>
            {" "}
            Product discovery and building what matters
          </Li>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
                />
            </g>
          </Svg>
          <Li style={{ fontFamily: "Roboto, sans-serif" }}>
            {" "}
            Measuring to ensure updates are a succes
          </Li>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
                />
            </g>
          </Svg>
          <Li style={{ fontFamily: "Roboto, sans-serif" }}> And much more!</Li>
        </Ul>

        <P2 style={{ fontFamily: "Roboto, sans-serif" }}>Email addres</P2>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Input
          type="text"
          placeholder="email@company.com"
          value={email}
          onChange={handleEmailChange}
          style={{
              borderColor: errorMessage ? "#fa6760" : "",
              backgroundColor: errorMessage ? "#ffe8e6" : "",
            }}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Valid email required"
            />
      </Container>
      <Button
        style={{ fontFamily: "Roboto, sans-serif" }}
        onClick={validateEmail}
        >
        Suscribe to monthly newsletter
      </Button>
      <Img src={logo3} alt="" />
      {showModal && (
          <Modal>
             <Background >
          <ModalContent>
            <Svg2
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              >
              <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#FF6A3A" />
                  <stop offset="100%" stop-color="#FF527B" />
                </linearGradient>
              </defs>
              <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
              </g>
            </Svg2>
            <ContainerText>
            <H2 style={{ fontFamily: "Roboto, sans-serif" }}>
              Thanks for subscribing!
            </H2>
            </ContainerText>
            <ContainerText2>
            <P3 style={{ fontFamily: "Roboto, sans-serif" }}>
              A confirmation email has been sent to {email}. Please open it and
              click the button inside to confirm your subscription.
            </P3>
            </ContainerText2>
            <Button2 onClick={() => setShowModal(false)}>Dismiss message</Button2>
          </ModalContent>
         </Background>
        </Modal>
      )}
    </Div>
      </Div1>
  );
};

const Div1 = styled.div `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: hsl(234, 29%, 20%);
`

const Button2 = styled.button `
position: absolute;
border: none;
width: 25rem;
margin-top: 25rem;
margin-left: 0rem;
border-radius: 10px;
padding: 20px 10px 20px 20px;
background-color: hsl(234, 29%, 20%);
font-size: 16px;
color: white;
cursor: pointer;
margin-bottom: 2rem;
z-index: 2;

&:hover {
  background: linear-gradient(to right, #ff5476, #ff6742);
}
`

const ContainerText = styled.div `
width: 25rem;
`
const ContainerText2 = styled.div `
position: absolute;
width: 25rem;
margin-left: 0rem;
`

const H2 = styled.h1 `
position: absolute;
font-size: 55px;
margin-top: -8rem;
margin-left: 0rem;
color: hsl(234, 29%, 20%);
font-weight: bold;
`

const P3 = styled.p `
position: absolute;
font-size: 17px;
margin-top: 2rem;
margin-left: 0rem;

`

const Svg2 = styled.svg `
position: absolute;
  margin-top: -23rem;
  margin-left: -21rem;
`

const Modal = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
z-index: 999;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px); 
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 32rem;
  height: 34rem;
  z-index: 9999;
  background-color: hsl(0, 0%, 100%);
  border-radius: 30px;

`;

const Div = styled.div`
  width: 60rem;
  height: 40rem;
  border-radius: 30px;
  background-color: hsl(0, 0%, 100%);

  @media (max-width: 475px) {
    width: 100rem;
    height: 100rem;
    border-radius: 0px;
    margin-top: 68rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 27rem;

  @media (max-width: 475px) {
    width: 23rem;
    margin-left: -1rem;
  }
`;

const Img = styled.img`
  position: absolute;
  margin-left: 2rem;
  margin-top: -26.5rem;
  width: 500px;
  height: 600px;
  opacity: 1;
  z-index: 1;

  @media (max-width: 500px) {
    opacity: 0;
    position: absolute;
    margin-left: 0rem;
    margin-top: -7.5rem;
    width: 360px;
    height: 284px;
    z-index: 9999;
  }
`;
const Img2 = styled.img`
  position: absolute;
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  margin-left: 100rem;
  margin-top: 1rem;
  width: 50rem;
  height: 38rem;

  @media (max-width: 500px) {
    opacity: 1;
    position: absolute;
    margin-left: 0rem;
    margin-top: -7.5rem;
    width: 360px;
    height: 284px;
    z-index: 9999;
  }
`;

const H1 = styled.h1`
  margin-top: 5rem;
  font-size: 55px;
  color: hsl(234, 29%, 20%);
  margin-left: 4rem;

  @media (max-width: 475px) {
    color: hsl(234, 29%, 20%);
    font-size: 40px;
    margin-left: 2rem;
    margin-top: 11.5rem;
  }
`;

const P = styled.p`
  margin-top: -1.5rem;
  margin-left: 4rem;
  font-size: 16px;
  font-weight: 400;
  color: hsl(235, 18%, 26%);

  @media (max-width: 475px) {
    margin-top: -0.5rem;
    margin-left: 3rem;
  }
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: -0.5rem;
`;

const Svg = styled.svg`
  position: absolute;
  margin-top: 1rem;
  margin-left: 3rem;
`;

const Li = styled.li`
  margin-top: 1.1rem;
  margin-left: 5rem;
  color: hsl(234, 29%, 20%);
  font-weight: 400;
`;

const P2 = styled.p`
  margin-top: 2rem;
  margin-left: 4rem;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 475px) {
    margin-left: 2.6rem;
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  position: relative;
  border: 1px solid hsl(231, 7%, 60%);
  width: 22rem;
  margin-top: -0.3rem;
  margin-left: 4rem;
  border-radius: 10px;
  padding: 20px 10px 20px 20px;
  font-size: 17px;

  @media (max-width: 475px) {
    margin-left: 2.5rem;
    width: 18rem;
    padding: 10px 5px 10px 10px;
  }
`;

const Button = styled.button`
  border: none;
  width: 24rem;
  margin-top: 1.5rem;
  margin-left: 4rem;
  border-radius: 10px;
  padding: 20px 10px 20px 20px;
  background-color: hsl(234, 29%, 20%);
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-bottom: 2rem;
  z-index: 2;

  &:hover {
    background: linear-gradient(to right, #ff5476, #ff6742);
  }

  @media (max-width: 475px) {
    margin-top: 1rem;
    margin-left: 1.5rem;
    width: 19.3rem;
    padding: 10px 5px 10px 10px;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  color: #fa6760;
  margin-top: 7.7rem;
  margin-left: 18rem;
  font-weight: bold;
`;
