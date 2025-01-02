import React from "react";
import { Box, Container, Grid } from "@mui/material";
import megamenu1 from "./assets/images/header/megamenu/10558235410462-MEGAMENU_DEF-Desktop_VDEF.avif";
import megamenu2 from "./assets/images/header/megamenu/megamenu2.avif";
import megamenu3 from "./assets/images/header/megamenu/megamenu3.avif";
import megamenu4 from "./assets/images/header/megamenu/megamenu4.avif";
import megamenu5 from "./assets/images/header/megamenu/megamenu5.avif";
import megamenu6 from "./assets/images/header/megamenu/megamenu6.avif";
import megamenu7 from "./assets/images/header/megamenu/megamenu7.avif";

const fashionLinks = [
  { text: "FASHION HOME", icon: "fa-solid fa-angle-right" },
  { text: "THE CHANEL HANDBAG", icon: "fa-solid fa-angle-right" },
];

const latestShows = [
  {
    title: "Cruise 2024/25",
    date: "Available in boutiques from November 2024",
  },
  {
    title: "Fall-Winter 2024/25",
    date: "Available in boutiques from September 2024",
  },
  {
    title: "2023/24 Metiers d'art",
    date: "Available in boutiques in June 2024",
  },
];

const inBoutiques = [
  "Spring-Summer 2024",
  "Spring-Summer 2024 Pre-Collection",
  "The Cruise 2023/24 Collection",
  "The Iconic Handbag - The Campaign",
  "Ready-To-Wear",
  "Handbags",
  "Shoes",
  "Costume Jewellery",
  "Small Leather Goods",
  "Eyewear",
  "Other Accessories",
];

const savoirFaire = [
  "Discover the savoir-faire of the 2023/24 Métiers d'art collection",
];

const chanelNews = ["Discover the latest news"];

const literaryRendezvous = [
  "LITERARY RENDEZVOUS AT RUE CAMBON",
  "Discover the savoir-faire of the 2023/24 Métiers d'art collection",
];

const services = [
  "A programme of services to preserve each CHANEL creation.",
  "Find a Boutique",
  "Book an appointment",
];
const megamenuData = {
  title: "EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS",
  image: {
    src: megamenu2,
    alt: "megamenu img1",
    linkText: "FINE JEWELLERY HOME",
  },
  sections: [
    {
      title: "FEATURED",
      items: [
        "Collection N°5",
        "Coco Crush, The Encounters",
        "The BLISS BOUTIQ Style Guide",
        "18 Place Vendôme",
      ],
    },
    {
      title: "CATEGORIES",
      items: [
        "Rings",
        "Bracelets",
        "Earrings",
        "Necklaces",
        "Brooches",
        "All Fine Jewellery",
        "BRIDAL",
        "Engagement Rings",
        "Wedding Rings",
      ],
    },
    {
      title: "COLLECTIONS",
      items: [
        "Coco Crush",
        "N°5",
        "Camélia",
        "Ultra",
        "Comète",
        "Plume de CHANEL",
        "Ruban",
        "All Fine Jewellery",
      ],
    },
    {
      title: "ADVICE AND SERVICES",
      items: [
        "Care and Maintenance",
        "Our Services",
        "Where can I take my Jewellery to be repaired?",
        "Guarantees and Authentication",
      ],
    },
  ],
};
const menuItems = [
  {
    title: "WATCHES HOME",
    image: megamenu3,
    link: "watches-home",
  },
  {
    title: "FEATURED",
    subItems: [
      "PREMIÈRE ÉDITION ORIGINALE",
      "The J12 watches",
      "J12 Automaton Calibre 6",
      "The CHANEL Watch Manufacture",
    ],
  },
  {
    title: "WATCH COLLECTIONS",
    subItems: [
      "J12",
      "PREMIÈRE",
      "BOY·FRIEND",
      "Code Coco",
      "Monsieur de CHANEL",
      "All Watches",
    ],
  },
  {
    title: "FINE WATCHMAKING",
    subItems: [
      "CHANEL Haute Horlogerie",
      "Artistic Craft Watches",
      "Manufacture Movement Watches",
      "Watches Set with Precious Stones",
    ],
    additional: {
      title: "WATCHMAKING ACCORDING TO CHANEL",
      subItems: [
        "CHANEL ceramic",
        "Haute Horlogerie movements",
        "18 Place Vendôme",
      ],
    },
  },
  {
    title: "ADVICE AND SERVICES",
    subItems: [
      "CHANEL",
      "Care and Maintenance",
      "Our Services",
      "Where can I have my Watch repaired?",
      "Guarantees and Authentication",
      "Manuals",
      "Size guide",
    ],
  },
];

const menuItems4 = [
  {
    title: "EYEWEAR HOME",
    image:  megamenu4 ,
    link: "eyewear-home",
  },
  {
    title: "SUNGLASSES",
    subItems: [
      "New This Season",
      "Exclusives",
      "Timeless",
      "All Sunglasses",
      "Virtual Try-On",
    ],
  },
  {
    title: "OPTICAL",
    subItems: ["New This Season", "Timeless", "All Optical", "Virtual Try-On"],
    additional: {
      title: "BLUE LIGHT GLASSES",
      subItems: ["All Blue Light Glasses", "Virtual Try-On"],
    },
  },
  {
    title: "STORIES",
    subItems: [
      "Eyewear Campaign",
      "Two-Tone Signature",
      "Timeless Codes",
      "A Tribute to Tweed",
      "Charming Hearts",
      "Graphic Lines",
    ],
  },
  {
    title: "SERVICES",
    subItems: ["Size Guide", "Care Instructions"],
  },
];

// const menuItems5 = [
//   {
//     title: "FRAGRANCE HOME",
//     imgSrc: megamenu5,
//     linkText: "FRAGRANCE HOME",
//   },
//   {
//     title: "IN THE SPOTLIGHT",
//     subItems: [
//       "Les Eaux de CHANEL",
//       "Take your CHANCE",
//       "Les Couleurs de CHANEL",
//     ],
//   },
//   {
//     title: "COLLECTIONS",
//     subItems: ["Les Exclusifs de CHANEL", "Les Eaux de CHANEL"],
//   },
//   {
//     title: "WOMEN",
//     subItems: [
//       "N°5",
//       "Coco Mademoiselle",
//       "Gabrielle CHANEL",
//       "Chance",
//       "Chance Eau Tendre",
//       "Chance Eau Fraîche",
//       "Chance Eau Vive",
//       "Coco",
//       "Coco Noir",
//       "Allure Sensuelle",
//       "Allure",
//       "N°19",
//       "Cristalle",
//       "View all",
//     ],
//   },
//   {
//     title: "MEN",
//     subItems: [
//       "Bleu de CHANEL",
//       "Allure Homme Sport",
//       "Allure Homme Sport Eau Extrême",
//       "Allure Homme",
//       "Allure Homme Édition Blanche",
//       "Platinum Égoïste",
//       "Égoïste",
//       "Pour Monsieur",
//       "Antaeus",
//       "View all",
//     ],
//   },
//   {
//     title: "BATH AND BODY",
//     subItems: ["Women", "Men", "View all"],
//   },
// ];


const menuItems5 = [
  {
    title: "FRAGRANCE HOME",
    image: megamenu5,
    alt: "megamenu img1",
    items: [],
  },
  {
    title: "IN THE SPOTLIGHT",
    items: [
      "Les Eaux de CHANEL",
      "Les Eaux de CHANEL",
      "Take your CHANCE",
      "Les Couleurs de CHANEL",
    ],
    subCategories: [
      {
        title: "THE CHANEL SELECTION",
        items: ["The Latest Creations", "Special Editions"],
      },
      {
        title: "CHANEL SERVICES",
        items: [
          "Les Rendez-vous CHANEL",
          "Fragrance & Beauty Boutiques",
          "Store Locator",
        ],
      },
    ],
  },
  {
    title: "COLLECTIONS",
    items: ["Les Exclusifs de CHANEL", "Les Eaux de CHANEL"],
  },
  {
    title: "WOMEN",
    items: [
      "N°5",
      "Coco Mademoiselle",
      "Gabrielle CHANEL",
      "Chance",
      "Chance Eau Tendre",
      "Chance Eau Fraîche",
      "Chance Eau Vive",
      "Coco",
      "Coco Noir",
      "Allure Sensuelle",
      "Allure",
      "N°19",
      "Cristalle",
      "View all",
    ],
  },
  {
    title: "MEN",
    items: [
      "Bleu de CHANEL",
      "Allure Homme Sport",
      "Allure Homme Sport Eau Extrême",
      "Allure Homme",
      "Allure Homme Édition Blanche",
      "Platinum Égoïste",
      "Égoïste",
      "Pour Monsieur",
      "Antaeus",
      "View all",
    ],
  },
  {
    title: "BATH AND BODY",
    items: ["Women", "Men", "View all"],
  },
];
const menuItems6 = [
  {
    title: "MAKEUP HOME",
    imgSrc: megamenu6,
    linkText: "MAKEUP HOME",
  },
  {
    title: "IN THE SPOTLIGHT",
    subItems: ["Chanel Beauty Mix Workout", "Chanel Beauty Mix Spa"],
  },
  {
    title: "CHANEL SERVICES",
    subItems: [
      "CHANEL Beauty Book",
      "Les Rendez-vous CHANEL",
      "Fragrance & Beauty Boutiques",
      "Store Locator",
    ],
  },
  {
    title: "LIPS",
    subItems: [
      "Lipsticks",
      "Liquid Lipsticks",
      "Lip Gloss",
      "Lip Pencils",
      "Lip Balms and Lip Care",
      "View all",
      "CHANEL TRY ON",
    ],
  },
  {
    title: "COMPLEXION",
    subItems: [
      "Base",
      "Foundations",
      "Concealer",
      "Powders",
      "Highlighter",
      "Blush",
      "Healthy Glow Makeup",
      "Bronzers",
      "View all",
    ],
  },
  {
    title: "EYES",
    subItems: [
      "Mascara",
      "Eyeshadows",
      "Eyeliners",
      "Eye Palette",
      "Brows",
      "View all",
      "CHANEL TRY ON",
    ],
  },
  {
    title: "NAILS",
    subItems: ["Nail Colour", "Manicure", "View all", "CHANEL TRY ON"],
  },
  {
    title: "BRUSHES AND ACCESSORIES",
    subItems: [
      "Complexion Brushes",
      "Eye Brushes",
      "Lip Brushes",
      "Other Accessories",
      "View all",
    ],
  },
];

const menuItems8 = [
  {
    title: "BLISS BOUTIQ CULTURE FUND",
    subItems: ["Discover the Prize", "Discover the Fund"],
  },
  {
    title: "BLISS BOUTIQ CONNECTS",
    subItems: ["Discover the Podcast"],
  },
  {
    title: "INSIDE BLISS BOUTIQ",
    subItems: ["Gabrielle Chanel", "100 years of creation", "Chapters"],
  },
  {
    title: "FOMDATION BLISS BOUTIQ",
    subItems: ["Discover the Fondation"],
  },
  {
    title: "SUSTAINABILITY",
    subItems: ["Climate"],
  },
  {
    title: "CAREERS",
    subItems: ["Join CHANEL"],
  },
];

const menuItems7 = [
  {
    title: " ",
    items: [
      {
        image: megamenu7,
        linkText: "SKINCARE HOME",
        linkIcon: "fa-solid fa-angle-right",
      },
    ],
  },
  {
    title: "IN THE SPOTLIGHT",
    items: [
      "Le Lift Pro",
      "N°1 DE CHANEL",
      {
        title: "THE BLISS BOUTIQ SELECTION",
        subItems: ["The Latest Creations", "Special Editions"],
      },
      {
        title: "CHANEL SERVICES",
        subItems: [
          "Les Rendez-vous CHANEL",
          "Fragrance & Beauty Boutiques",
          "Store Locator",
        ],
      },
    ],
  },
  {
    title: "BY CATEGORY",
    items: [
      "Cleansers & Makeup Removers",
      "Toners & Lotions",
      "Serums & Concentrates",
      "Moisturisers",
      "Eyes & Lips",
      "Oils",
      "Protection",
      "Masks & Scrubs",
      "Mists",
      "Body Care",
      "Massage Accessories",
      "View all",
    ],
  },
  {
    title: "BY COLLECTION",
    items: [
      "N°1 DE CHANEL",
      "Sublimage",
      "Le Lift & Le Lift Pro",
      "Hydra Beauty",
      "Le Blanc",
      "The Cleansing Collection",
      "CC Cream",
      "UV Essentiel",
    ],
  },
  {
    title: null,
    items: [
      "La Solution 10 de CHANEL",
      "Huile de Jasmin",
      "La Crème Main",
      "Body Excellence",
      "Others",
      "View all",
    ],
  },
];

// ========== megamenu data ============
const fullMegamenu1 = (
  <Container maxWidth="xl">
    <Box>
      <Grid container columnSpacing={4} justifyContent="center">
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "20px", xl: "0" }}>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenu1} alt="megamenu img1" />
            </Box>
            <Box>
              {fashionLinks.map((link, index) => (
                <Box
                  key={index}
                  className="fs-11"
                  sx={{
                    transition: "0.4s",
                    cursor: "pointer",
                    fontWeight: "bold",
                    mt: "15px",
                    pb: "8px",
                    display: "inline-block",
                    borderBottom: "1px solid transparent",
                    "&:hover": {
                      borderBottom: "1px solid black",
                    },
                  }}
                >
                  {link.text} <i className={link.icon}></i>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              LETEST SHOWS
            </Box>
            {latestShows.map((show, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {show.title}
                <Box
                  color="textGray"
                  className="fs-12"
                  sx={{ mt: { xl: "20px", xs: "10px" } }}
                >
                  {show.date}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
              IN BOUTIQUES
            </Box>
            {inBoutiques.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                SAVOIR-FAIRE
              </Box>
              {savoirFaire.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    fontWeight: "500",
                    color: "black",
                    mt: { xl: "20px", xs: "10px" },
                  }}
                  className="fs-14"
                >
                  {text}
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                CHANEL NEWS
              </Box>
              {chanelNews.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    fontWeight: "500",
                    color: "black",
                    mt: { xl: "20px", xs: "10px" },
                  }}
                  className="fs-14"
                >
                  {text}
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  width: { xl: "100%", xs: "80%" },
                }}
                className="fs-14"
              >
                {literaryRendezvous[0]}
              </Box>
              <Box
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {literaryRendezvous[1]}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                SERVICES
              </Box>
              {services.map((service, index) => (
                <Box key={index} sx={{ mt: { xl: "20px", xs: "10px" } }}>
                  <Box
                    sx={{ fontWeight: "bold", color: "black" }}
                    className="fs-14"
                  >
                    {index === 0 ? "CHANEL" : service}
                  </Box>
                  {index === 0 && (
                    <Box color="textGray" className="fs-12" sx={{ mt: "10px" }}>
                      {service}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu2 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xs={12} sx={{ paddingLeft: "unset !important" }}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              textWrap: "wrap !important",
              py: "50px",
              width: "100%",
            }}
            className="fs-14"
          >
            {megamenuData.title}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box>
            <Box sx={{ width: "216px", height: "290px" }}>
              <img src={megamenuData.image.src} alt={megamenuData.image.alt} />
            </Box>
            <Box>
              <Box
                className="fs-11"
                sx={{
                  transition: "0.4s",
                  cursor: "pointer",
                  fontWeight: "bold",
                  mt: "15px",
                  pb: "8px",
                  display: "inline-block",
                  borderBottom: "1px solid transparent",
                  "&:hover": {
                    borderBottom: "1px solid black",
                  },
                }}
              >
                {megamenuData.image.linkText}{" "}
                <i className="fa-solid fa-angle-right"></i>
              </Box>
            </Box>
          </Box>
        </Grid>

        {megamenuData.sections.map((section, index) => (
          <Grid key={index} item xl={2} xs={12} mt={{ xs: "20px", xl: "0" }}>
            <Box>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                {section.title}
              </Box>
              {section.items.map((item, itemIndex) => (
                <Box
                  key={itemIndex}
                  sx={{
                    fontWeight: "500",
                    color: "black",
                    mt: { xl: "20px", xs: "10px" },
                  }}
                  className="fs-14"
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);
const fullMegamenu3 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        {menuItems.map((menuItem, index) => (
          <Grid item xl={2} xs={12} key={index}>
            <Box mt={{ xs: "30px", xl: "0" }}>
              <Box style={{ textAlign: "left", py: "10px" }}>
                {menuItem.image && (
                  <Box sx={{ width: "216px", height: "290px" }}>
                    <img src={menuItem.image} alt={menuItem.title} />
                  </Box>
                )}
                <Box
                  sx={{ fontWeight: "bold", color: "black" }}
                  className="fs-14"
                >
                  {menuItem.title}
                </Box>
                {menuItem.subItems && (
                  <Box>
                    {menuItem.subItems.map((item, subIndex) => (
                      <Box
                        key={subIndex}
                        sx={{
                          fontWeight: "500",
                          color: "black",
                          mt: { xl: "20px", xs: "10px" },
                        }}
                        className="fs-14"
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                )}
                {menuItem.additional && (
                  <Box>
                    <Box
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        mt: { xl: "50px", xs: "30px" },
                      }}
                      className="fs-14"
                    >
                      {menuItem.additional.title}
                    </Box>
                    {menuItem.additional.subItems.map((item, subIndex) => (
                      <Box
                        key={subIndex}
                        sx={{
                          fontWeight: "500",
                          color: "black",
                          mt: { xl: "20px", xs: "10px" },
                        }}
                        className="fs-14"
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                )}
                {menuItem.link && (
                  <Box
                    className="fs-11"
                    sx={{
                      transition: "0.4s",
                      cursor: "pointer",
                      fontWeight: "bold",
                      mt: "15px",
                      pb: "8px",
                      display: "inline-block",
                      borderBottom: "1px solid transparent",
                      "&:hover": {
                        borderBottom: "1px solid black",
                      },
                    }}
                  >
                    {menuItem.link} <i className="fa-solid fa-angle-right"></i>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu4 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        {menuItems4.map((menuItem4, index) => (
          <Grid item xl={2} xs={12} key={index}>
            <Box mt={{ xs: "30px", xl: "0" }}>
              <Box style={{ textAlign: "left", py: "10px" }}>
                {menuItem4.image && (
                  <Box sx={{ width: "216px", height: "290px" }}>
                    <img src={menuItem4.image} alt={menuItem4.title} />
                  </Box>
                )}
                <Box
                  sx={{ fontWeight: "bold", color: "black" }}
                  className="fs-14"
                >
                  {menuItem4.title}
                </Box>
                {menuItem4.subItems && (
                  <Box>
                    {menuItem4.subItems.map((item, subIndex) => (
                      <Box
                        key={subIndex}
                        sx={{
                          fontWeight: "500",
                          color: "black",
                          mt: { xl: "20px", xs: "10px" },
                        }}
                        className="fs-14"
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                )}
                {menuItem4.additional && (
                  <Box>
                    <Box
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        mt: { xl: "50px", xs: "30px" },
                      }}
                      className="fs-14"
                    >
                      {menuItem4.additional.title}
                    </Box>
                    {menuItem4.additional.subItems.map((item, subIndex) => (
                      <Box
                        key={subIndex}
                        sx={{
                          fontWeight: "500",
                          color: "black",
                          mt: { xl: "20px", xs: "10px" },
                        }}
                        className="fs-14"
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                )}
                {menuItem4.link && (
                  <Box
                    className="fs-11"
                    sx={{
                      transition: "0.4s",
                      cursor: "pointer",
                      fontWeight: "bold",
                      mt: "15px",
                      pb: "8px",
                      display: "inline-block",
                      borderBottom: "1px solid transparent",
                      "&:hover": {
                        borderBottom: "1px solid black",
                      },
                    }}
                  >
                    {menuItem4.link} <i className="fa-solid fa-angle-right"></i>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);




// const fullMegamenu5 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         {menuItems5.map((item, index) => (
//           <Grid item xl={2} xs={12} key={index}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               {item.imgSrc && (
//                 <Box sx={{ width: "216px", height: "290px" }}>
//                   <img src={item.imgSrc} alt={`megamenu img${index}`} />
//                 </Box>
//               )}
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 {item.title}
//               </Box>

//               {item.subItems &&
//                 item.subItems.map((subItem, subIndex) => (
//                   <Box
//                     key={subIndex}
//                     className="fs-14"
//                     sx={{
//                       fontWeight: "500",
//                       color: "black",
//                       mt: { xl: "20px", xs: "10px" },
//                     }}
//                   >
//                     {subItem}
//                   </Box>
//                 ))}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );


const fullMegamenu6 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        {menuItems6.map((item, index) => (
          <Grid item xl={2} xs={12} key={index}>
            <Box mt={{ xs: "30px", xl: "0" }}>
              {item.imgSrc && (
                <Box sx={{ width: "216px", height: "290px" }}>
                  <img src={item.imgSrc} alt={`megamenu img${index}`} />
                </Box>
              )}
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                {item.title}
              </Box>

              {item.subItems &&
                item.subItems.map((subItem, subIndex) => (
                  <Box
                    key={subIndex}
                    className="fs-14"
                    sx={{
                      fontWeight: "500",
                      color: "black",
                      mt: { xl: "20px", xs: "10px" },
                    }}
                  >
                    {subItem}
                  </Box>
                ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu7 = (
  <Container maxWidth={"xl"}>
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        {menuItems7.map((section, index) => (
          <Grid key={index} item xl={2} xs={12}>
            <Box mt={{ xs: "30px", xl: "0" }}>
              {section.title && (
                <Box
                  sx={{ fontWeight: "bold", color: "black" }}
                  className="fs-14"
                >
                  {section.title}
                </Box>
              )}
              {section.items.map((item, idx) => (
                <Box key={idx} mt={{ xl: "20px", xs: "10px" }}>
                  {typeof item === "string" ? (
                    <Box
                      sx={{ fontWeight: "500", color: "black" }}
                      className="fs-14"
                    >
                      {item}
                    </Box>
                  ) : (
                    <Box>
                      {item.image && (
                        <Box sx={{ width: "216px", height: "290px" }}>
                          <img
                            src={item.image}
                            alt={`megamenu img${index + 1}`}
                          />
                        </Box>
                      )}
                      {item.linkText && (
                        <Box
                          className="fs-11"
                          sx={{
                            transition: "0.4s",
                            cursor: "pointer",
                            fontWeight: "bold",
                            mt: "15px",
                            pb: "8px",
                            display: "inline-block",
                            borderBottom: "1px solid transparent",
                            "&:hover": {
                              borderBottom: "1px solid black",
                            },
                          }}
                        >
                          {item.linkText} <i className={item.linkIcon}></i>
                        </Box>
                      )}
                      {item.title && (
                        <Box
                          sx={{ fontWeight: "bold", color: "black" }}
                          className="fs-14"
                        >
                          {item.title}
                        </Box>
                      )}
                      {item.subItems &&
                        item.subItems.map((subItem, subIdx) => (
                          <Box
                            key={subIdx}
                            sx={{
                              fontWeight: "500",
                              color: "black",
                              mt: { xl: "20px", xs: "10px" },
                            }}
                            className="fs-14"
                          >
                            {subItem}
                          </Box>
                        ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu8 = (
  <Container maxWidth="xl">
    <Box>
      <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
        <Grid item xl={12}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              py: "50px",
              textWrap: "wrap !important",
            }}
            className="fs-14"
          >
            EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
          </Box>{" "}
        </Grid>
        {menuItems8.map((menuItem, index) => (
          <Grid item xl={2} xs={12} key={index}>
            <Box mt={{ xs: "30px", xl: "0" }}>
              <Box
                sx={{ fontWeight: "bold", color: "black" }}
                className="fs-14"
              >
                {menuItem.title}
              </Box>
              {menuItem.subItems &&
                menuItem.subItems.map((subItem, subIndex) => (
                  <Box
                    key={subIndex}
                    className="fs-14"
                    sx={{
                      fontWeight: "500",
                      color: "black",
                      mt: { xl: "20px", xs: "10px" },
                    }}
                  >
                    {subItem}
                  </Box>
                ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export {
  fullMegamenu1,
  fullMegamenu2,
  fullMegamenu3,
  fullMegamenu4,
  // fullMegamenu5,
  fullMegamenu6,
  fullMegamenu7,
  fullMegamenu8,
};
