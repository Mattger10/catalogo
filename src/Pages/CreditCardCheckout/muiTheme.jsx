import { createTheme } from '@material-ui/core/styles';
import Font from "../../assets/fonts/Blooming Elegant Sans.otf";
import Font2 from "../../assets/fonts/SingUp Fonts/AvenirNextLTPro-Regular.otf";
import Font3 from "../../assets/Checkout/FilsonProBold.otf"

const myFont = new FontFace('Font', `url(${Font})`);
const myFont2 = new FontFace('Font2', `url(${Font2})`);
const myFont3 = new FontFace('Font3', `url(${Font3})`);

document.fonts.add(myFont);
document.fonts.add(myFont2);
document.fonts.add(myFont3);

const Theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#00ff00',
    },
  },
  typography: {
    fontFamily: 'Font, Font2, Font3',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [myFont],
      },
    },
    MuiLoadingButton: {
      root: {
        backgroundColor: '#39d996', // Color de fondo del botón de carga
      color: '#FFFFFF', // Color del texto del botón de carga
      padding: '8px 16px', // Relleno del botón de carga
      border: 'none', // Estilo del borde del botón de carga
      boxShadow: 'none', // Sombra del botón de carga
      fontSize: '14px', // Tamaño de fuente del texto del botón de carga
      fontWeight: 'bold', // Grosor de fuente del texto del botón de carga
      textTransform: 'uppercase', // Transformación del texto del botón de carga
      },
      loadingIndicator: {
        // Estilos para el indicador de carga
      },
    },
  },
});

export default Theme;