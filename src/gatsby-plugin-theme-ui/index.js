export default {
    breakpoints: ["375px", "768px", "1440px"],  
  colors: {
    text: "black",
    background: "#fff",
    primary: "tomato",
    secondary: "#ff6347",
  },
  fonts: {
    body: "EB Garamond, system-ui, sans-serif",
    heading: "EB Garamond, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      h1: {
        fontSize: [35,35,44],
        fontFamily: "heading",
        fontWeight: "bold",
        color: "primary",
      },
      h2: {
        fontSize: [27,27,30],
        fontFamily: "heading",
        fontWeight: "bold",
        color: "primary",
      },
      h3: {
        fontSize: [20,20, 26],
        fontFamily: "heading",
        lineHeight: 1.7,
        fontWeight: "bold",
      },
      p: {
        fontFamily: "body",
        lineHeight: "body",
      },
      ul: {
        my: 2,
      },
      ol: {
        my: 2,
      },
      li: {
        fontSize: 20,
        fontFamily: "body",
        lineHeight: 1.7,
      },
    },
  },
  layout: { 
    root: { 
      with: `100%`,
    }, 
    header: { 
      with: `100%`,
      mb: `50px 0px`
    },
    hero: { 
      width: ["100%", "100%", "100%"], 
      margin: `auto`,
      display: `grid`, 
      justifyItems: `center`,
      gridGap: `50px`
  
    },
    main: { 
      width: "100%"
    },
    uspSection: {
      width: ["90%", "70%", "70%"],
      margin: `auto`, 
      display: `grid`, 
      gridGap: ["60px","100px","150px"]

    },
    investorSection: {
      width: ["90%", "70%", "70%"],
      margin: `auto`, 
      display: `grid`, 
      gridGap: ["60px","100px","150px"] 
    },
    contactSection: {
      width: ["90%", "70%", "70%"] 
    },
    footer: { 
      width: `100%`,
      m: `50px 0px` 
    }
  }
}
