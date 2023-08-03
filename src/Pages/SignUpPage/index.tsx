import { FunctionComponent, useState } from "react";
import {
  Box,
  styled,
  Typography,
  Input,
  InputLabel,
  Tooltip,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { LoadingButton } from "@mui/lab";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./muiTheme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";


interface SignUpPageProps {}

const SignUpPage: FunctionComponent<SignUpPageProps> = () => {
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setLoading(true);
  };

  return (
    <ThemeProvider theme={theme} >
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#081024",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Link to="/"> <HomeOutlinedIcon sx={{position: "absolute", color: "#ccc", marginLeft: "-21.5rem", marginTop: "-28.2rem", fontSize: 36, "&:hover": {color: "#68A4E8"}}} /> </Link>
      <SignUpBox>
        <LeftContainer>
          <Box sx={{ marginLeft: "0rem"}}>
            <Typography color="#1B274C" fontSize={56} style={{ fontFamily: 'Font' }}  sx={{ marginTop: "1rem", marginLeft: "1rem"}}>
              Blockchain
            </Typography>
            <Typography color="white" fontSize={60} style={{ fontFamily: 'Font' }} sx={{marginTop: "-1rem", marginLeft: "1rem"}}>
              Revolution
            </Typography>
            <Typography color="white" fontSize={60} fontFamily="Font" sx={{marginTop: "-1rem", marginLeft: "1rem", letterSpacing: "0.2rem"}}>
              in Advertising
            </Typography>
          </Box>
          <Row sx={{marginLeft: "1rem", marginTop: "1rem"}}>
            <Typography color="#68A4E8" fontSize={10} fontWeight="bold" fontFamily="Font" sx={{marginRight: "1rem", letterSpacing: "0.1rem"}}>
              LOW FEES
            </Typography>{" "}
            <FiberManualRecordIcon
              sx={{ color: "#68A4E8", fontSize: 8}}
            />
            <Typography color="#68A4E8" fontSize={10} fontWeight="bold" fontFamily="Font" sx={{marginRight: "1rem", marginLeft: "1rem", letterSpacing: "0.1rem"}}>
              CENSORSHIP RESISTANT
            </Typography>{" "}
            <FiberManualRecordIcon
              sx={{ color:"#68A4E8", fontSize: 8 }}
            />
            <Typography color="#68A4E8" fontSize={10} fontWeight="bold" fontFamily="Font" sx={{marginLeft: "1rem", letterSpacing: "0.1rem"}}>
              AI READY
            </Typography>
          </Row>
        </LeftContainer>
        <RightContainer>
          <Box sx={{ width: "80%", marginTop: "-1.5rem" }}>
            <Typography
              color="#0E182F"
              fontSize={28}
              fontFamily="Font"
              sx={{ marginTop: "4rem", marginLeft: "1rem" }}
            >
              Hello!
            </Typography>

            <Typography
              color="grey"
              fontSize={14}
              fontFamily="Font2"
              sx={{ marginTop: "0.5rem", marginLeft: "1rem"}}
            >
              Etiam pretium dapibus congue. Praesent a lorem erat. Morbi mollis
              posuere lacus, vel semper risus.
            </Typography>

            <InputLabel
              htmlFor="email"
              sx={{
                fontSize: 12,
                marginTop: "3rem",
                marginLeft: "1rem",
                marginBottom: "0.5rem",
                fontFamily:"Font2"
              }}
            >
              Email Address
            </InputLabel>
            <StyledInput
              id="email"
              value={email}
              onChange={(event) => handleChangeEmail(event)}
              //onChange={handleChangeEmail}
              endAdornment={
                email ===
                "" ? null : /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
                    email
                  ) ? (
                  <CheckCircleIcon sx={{ color: "#36D385" }} />
                ) : (
                  <CancelIcon sx={{ color: "#E83A30"}} />
                )
              }
            />

            <InputLabel
              htmlFor="password"
              sx={{ fontSize: 12, marginTop: "1.5rem", marginLeft: "1rem", marginBottom: "0.5rem", fontFamily:"Font2" }}
            >
              Password
            </InputLabel>
            <StyledInput
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              endAdornment={
                password ===
                "" ? null : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/.test(
                    password
                  ) ? (
                  <CheckCircleIcon sx={{ color: "#36D385", backgroundColor: "none", marginLeft: "10rem" }} />
                ) : (
                  <Tooltip
                    title="Password must have 1 uppercase, 1 lowercase, 1 number and between 6 and 10 characters"
                    arrow
                  >
                    <CancelIcon sx={{ color: "#E83A30", backgroundColor: "none", marginLeft: "10rem" }} />
                  </Tooltip>
                )
              }
            />
            <Row
              sx={{
                fontSize: 12,
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "2rem",
              }}
            >
              <CheckCircleIcon
                onClick={() => setIsRememberMe(!isRememberMe)}
                sx={{
                  color: `${isRememberMe ? "#36D385" : "#CDD2D9"}`,
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: "0rem",
                  marginLeft: "0.5rem",
                  marginRight: "5.5rem",
                  fontFamily:"Font"
                }}
              >
                Remember me
              </Typography>
              <Typography color="grey" sx={{ fontSize: 14, cursor: "pointer", fontFamily:"Font2" }}>Forgot password?</Typography>
            </Row>
            <LoadingButton
              sx={{
                backgroundColor: "#56A8FC",
                color: "white",
                padding: "10px 55px 10px 55px",
                marginLeft: "1rem",
                marginTop: "1rem",
                ":hover": { backgroundColor: "#0E182F" },
              }}
              loading={loading}
              onClick={handleLoading}
              
            >
              <Typography sx={{ textTransform: "none" }}>Sign In</Typography>
            </LoadingButton>
          </Box>
          <Row sx={{marginLeft: "1rem", marginTop: "3rem"}}>
            <Typography color="grey" sx={{
                  fontSize: 13,
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}>Don't have an account?</Typography>
            <Typography color="#56A8FC" sx={{fontSize: 13, cursor: "pointer",  fontFamily:"Font2"}} >Sing Up</Typography>
          </Row>
        </RightContainer>
      </SignUpBox>
    </Box>
    </ThemeProvider>
  );
};

export default SignUpPage;

const LeftContainer = styled(Box)(() => ({
  backgroundColor: "#0E182F",
  width: "25vw",
  height: "60vh",
  padding: 20,
  borderRadius: "10px"
}));

const RightContainer = styled(Box)(() => ({
  backgroundColor: "#fff",
  width: "25vw",
  height: "60vh",
  padding: 20,
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px"
}));

const SignUpBox = styled(Box)(() => ({
  display: "flex",
}));

const Row = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const StyledInput = styled(Input)(() => ({
  backgroundColor: "#f8f9fd", 
  border: "1px solid #eceef0",
  marginLeft: "1rem",
  width: "21rem",
  borderRadius: "5px",
  padding: "5px 10px 5px 10px",
  '&.MuiInput-underline:after': {
    borderBottom: "none"
  },
  '&.MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '&.MuiInput-underline:hover:before': {
    borderBottom: 'none',
  },


  '& .MuiInputBase-input:-webkit-autofill': {
    '-webkit-box-shadow': '0 0 0 1000px #F8FAFB inset', // Quitar fondo celestito
  },
}));


