import { createTheme } from "@mui/material";

// declare module "@mui/material/styles" {
// interface Palette {
//   mygreen: Palette["primary"];
//   orange: Palette["primary"];
//   tealBlue: Palette["primary"];
//   purple: Palette["primary"];
//   pink: Palette["primary"];
//   red: Palette["primary"];
//   bronze: Palette["primary"];
//   yellow: Palette["primary"];
//   tiffiny: Palette["primary"];
// }

// interface PaletteOptions {
//   mygreen: PaletteOptions["primary"];
//   orange: PaletteOptions["primary"];
//   tealBlue: PaletteOptions["primary"];
//   purple: PaletteOptions["primary"];
//   pink: PaletteOptions["primary"];
//   red: PaletteOptions["primary"];
//   bronze: PaletteOptions["primary"];
//   yellow: PaletteOptions["primary"];
//   tiffiny: PaletteOptions["primary"];
// }

// interface PaletteColor {
//   main: string;
// }

//   interface SimplePaletteColorOptions {
//     main: string;
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#3361FF",
    },
    secondary: {
      main: "#29CC39",
      contrastText: "#fff",
    },
    error: {
      main: "#E62E2E",
      contrastText: "#fff",
    },
    info: {
      main: "#FFCB33",
      contrastText: "#fff",
    },
    warning: {
      main: "#FF6633",
      contrastText: "#fff",
    },
    success: {
      main: "#8833FF",
      contrastText: "#fff",
    },
    action: {
      disabled: "#c3cad8",
    },

    // mygreen: {
    //   main: "#29CC39",
    // },
    // orange: {
    //   main: "#FF6633",
    //   contrastText: "#fff",
    // },
    // tealBlue: {
    //   main: "#33BFFF",
    //   contrastText: "#fff",
    // },
    // purple: {
    //   main: "#8833FF",
    //   contrastText: "#fff",
    // },
    // pink: {
    //   main: "#E62E7B",
    //   contrastText: "#fff",
    // },
    // red: {
    //   main: "#E62E2E",
    //   contrastText: "#fff",
    // },
    // bronze: {
    //   main: "#CC7429",
    //   contrastText: "#fff",
    // },
    // yellow: {
    //   main: "#FFCB33",
    //   contrastText: "#fff",
    // },
    // tiffiny: {
    //   main: "#2EE6CA",
    //   contrastText: "#fff",
    // },
  },
  typography: {
    h1: {
      color: "#4d5f7e",
      fontSize: 16,
      fontWeight: 700,
    },
    h2: {
      color: "#4d5f7e",
      fontSize: 14,
      fontWeight: 700,
    },
    subtitle1: {
      color: "#7d90b1",
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle2: {
      color: "#c1c9d7",
      fontSize: 14,
      fontWeight: 700,
    },
  },
});

export default theme;
