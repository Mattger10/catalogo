import { FunctionComponent, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  Box,
  styled,
  Typography,
  Input,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import mac from "../../assets/Checkout/mac.png";
import theme from "./muiTheme";
import visa from "../../assets/Checkout/visa-10.svg";
import mastercard from "../../assets/Checkout/mastercard-2.svg";
import americanexpress from "../../assets/Checkout/american-express-1.svg";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";

interface CheckoutPageProps {}

const Checkout: FunctionComponent<CheckoutPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cardType, setCardType] = useState<string>("");

  const detectCardType = (cardNumber: string) => {
    // Elimina espacios y caracteres no numéricos del número de tarjeta
    const trimmedNumber = cardNumber.replace(/\s+/g, "").replace(/[^0-9]/g, "");
  
    // Define expresiones regulares para verificar el formato del número de tarjeta
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const americanExpressRegex = /^(3[47][0-9]{13})$/;
  
    // Verifica el número de tarjeta con las expresiones regulares
    if (visaRegex.test(trimmedNumber)) {
      setCardType("visa");
    } else if (mastercardRegex.test(trimmedNumber)) {
      setCardType("mastercard");
    } else if (americanExpressRegex.test(trimmedNumber)) {
      setCardType("americanexpress");
    } else {
      setCardType("");
    }
  };
  
  
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setLoading(true);
  };

  const formatCardNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.target;
    const trimmedValue = input.value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    const formattedValue = trimmedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
  
    input.value = formattedValue;
  
    // Detecta el tipo de tarjeta y actualiza el estado cardType
    detectCardType(trimmedValue);
  };

  const formatDateNumber = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = event.target;
    const trimmedValue = input.value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    const formattedValue = trimmedValue.replace(/(\d{2})(?=\d)/g, "$1 ");

    input.value = formattedValue;
  };

  const formatCodeNumber = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = event.target;
    const trimmedValue = input.value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    const formattedValue = trimmedValue.replace(/(\d)(?=\d)/g, "$1 ");

    input.value = formattedValue;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#9ba2cf",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/"> <HomeOutlinedIcon sx={{position: "absolute", color: "#fff", marginLeft: "-24.5rem", marginTop: "-28.2rem", fontSize: 36, "&:hover": {color: "#39d996"}}} /> </Link>
        <SignUpBox>
          <LeftContainer>
            <Box sx={{ width: "80%", marginTop: "5rem", marginLeft: "1.5rem" }}>
              <Typography
                color="#c2cad5"
                fontSize={14}
                fontFamily="Font"
                letterSpacing="0.2rem"
                sx={{ marginTop: "4rem", marginLeft: "1rem" }}
              >
                NÚMERO DE TARJETA
              </Typography>
              <StyledTextField
                id="cardNumberInput"
                type="text"
                inputProps={{ maxLength: 19 }}
                onChange={formatCardNumber}
                sx={{fontSize: "16px", fontFamily: "Font", letterSpacing: "0.3rem", color:"#667287"}}
              />
              <ImageVisa>
              {cardType === "visa" && <img src={visa} alt="Visa" />}
              </ImageVisa>
              <ImageMastercard>
              {cardType === "mastercard" && <img src={mastercard} alt="Mastercard" />}
              </ImageMastercard>
              <ImageAmerican >
              {cardType === "americanexpress" && <img src={americanexpress} alt="American Express" />}
              </ImageAmerican>
              <Typography
                color="#c2cad5"
                fontSize={12}
                fontFamily="Font"
                letterSpacing="0.2rem"
                sx={{ marginTop: "4rem", marginLeft: "1rem" }}
              >
                Mes / Año
              </Typography>
              <StyledTextFieldDate 
              id="cardNumberInput"
              type="text"
              inputProps={{ maxLength: 5 }}
              onChange={formatDateNumber}
              sx={{fontFamily: "Font", letterSpacing: "0.3rem", color:"#667287"}}
              />
              <Typography
                color="#c2cad5"
                fontSize={12}
                fontFamily="Font"
                letterSpacing="0.1rem"
                sx={{ position: "absolute", marginTop: "-3.9rem", marginLeft: "18rem" }}
              >
                Código de seguridad
              </Typography>
              <StyledTextFieldCode
              id="cardNumberInput"
              type="text"
              inputProps={{ maxLength: 6 }}
              onChange={formatCodeNumber}
              sx={{fontFamily: "Font", letterSpacing: "0rem", color:"#667287"}}
              />
              <Typography
                color="#c2cad5"
                fontSize={14}
                fontFamily="Font"
                letterSpacing="0.2rem"
                sx={{marginTop: "4rem", marginLeft: "1rem" }}
              >
                NOMBRE
              </Typography>
              <StyledTextFieldName 
              sx={{fontFamily: "Font", letterSpacing: "0rem", color:"#667287"}}/>
              <LoadingButton
                sx={{
                  position: "absolute",
                  backgroundColor: "#39d996",
                  color: "white",
                  padding: "8px 40px 8px 40px",
                  marginLeft: "7rem",
                  marginTop: "0rem",
                  borderRadius: "30px",

                  ":hover": {
                    backgroundColor: "#39d996",
                    boxShadow: "1px 1px 10px 2px #39d996",
                  },
                }}
                loading={loading}
                onClick={handleLoading}
              >
                <Typography sx={{ textTransform: "none" }}>Pagar</Typography>
              </LoadingButton>
            </Box>
          </LeftContainer>
          <RightContainer>
            <ImageMac src={mac} alt="" />
            <Typography
            color="#fff"
            fontSize={20}
            fontFamily="Font"
            letterSpacing="0.2rem"
            sx={{marginTop: "20rem", marginLeft: "6rem" }}
            >TOTAL
            </Typography>
            <Typography
            color="#fff"
            fontSize={40}
            fontFamily="Font3"
            letterSpacing="0.2rem"
            sx={{marginTop: "1rem", marginLeft: "2rem" }}
            >$950.000
            </Typography>
          </RightContainer>
        </SignUpBox>
      </Box>
    </ThemeProvider>
  );
};

export default Checkout;

const SignUpBox = styled(Box)(() => ({
  display: "flex",
}));

const LeftContainer = styled(Box)(() => ({
  backgroundColor: "#fff",
  width: "30vw",
  height: "50vh",
  padding: 20,
}));

const RightContainer = styled(Box)(() => ({
  backgroundColor: "#6a778d",
  width: "15vw",
  height: "50vh",
  padding: 20,
}));

const StyledTextField = styled(Input)(() => ({
  marginLeft: "1rem",
  width: "21rem",
  borderRadius: "5px",
  padding: "5px 10px 5px 10px",
  "&.MuiInput-underline:after": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:before": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:hover:before": {
    borderBottomColor: "#c2cad5",
  },

  "& .MuiInputBase-input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 1000px white inset",
  },
}));

const StyledTextFieldDate = styled(Input)(() => ({
  marginLeft: "1rem",
  width: "13rem",
  borderRadius: "5px",
  padding: "5px 10px 5px 10px",
  "&.MuiInput-underline:after": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:before": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:hover:before": {
    borderBottomColor: "#c2cad5",
  },

  "& .MuiInputBase-input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 1000px #F8FAFB inset",
  },
}));

const StyledTextFieldCode = styled(Input)(() => ({
  position: "absolute",
  marginTop: "0rem",
  marginLeft: "4rem",
  width: "13rem",
  borderRadius: "5px",
  padding: "5px 10px 5px 10px",
  "&.MuiInput-underline:after": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:before": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:hover:before": {
    borderBottomColor: "#c2cad5",
  },

  "& .MuiInputBase-input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 1000px #F8FAFB inset",
  },
}));

const StyledTextFieldName = styled(Input)(() => ({
  marginLeft: "1rem",
  width: "15rem",
  borderRadius: "5px",
  padding: "5px 10px 5px 10px",
  "&.MuiInput-underline:after": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:before": {
    borderBottomColor: "#c2cad5",
  },
  "&.MuiInput-underline:hover:before": {
    borderBottomColor: "#c2cad5",
  },

  "& .MuiInputBase-input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 1000px #F8FAFB inset",
  },
}));

const ImageVisa = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  marginTop: "-1.8rem",
  marginLeft: "24rem",
  width: "20px",
  height: "20px"
}));

const ImageMastercard = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  marginTop: "-2.7rem",
  marginLeft: "24rem",
  width: "40px",
  height: "40px"
}));

const ImageAmerican = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  marginTop: "-3.7rem",
  marginLeft: "24rem",
  width: "60px",
  height: "60px"
}));

const ImageMac = styled("img")(() => ({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  marginTop: "1.5rem",
  marginLeft: "-9rem",
  width: "580px",
  height: "260px"
}));

