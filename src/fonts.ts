import localFont from "next/font/local";

export const helveticaNowDisplay = localFont({
  src: [
    {
      path: "./HelveticaNowDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./HelveticaNowDisplay-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./HelveticaNowDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./HelveticaNowDisplay-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
});

export const freightBigPro = localFont({
  src: [
    {
      path: "./FreightBigPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./FreightBigPro-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./FreightBigPro-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./FreightBigPro-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    
  ],
});
