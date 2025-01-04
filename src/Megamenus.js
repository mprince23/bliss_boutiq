// import React from "react";
// import { Box, Container, Grid } from "@mui/material";
// import megamenu1 from "./assets/images/header/megamenu/10558235410462-MEGAMENU_DEF-Desktop_VDEF.avif";
// import megamenu2 from "./assets/images/header/megamenu/megamenu2.avif";
// import megamenu3 from "./assets/images/header/megamenu/megamenu3.avif";
// import megamenu4 from "./assets/images/header/megamenu/megamenu4.avif";
// import megamenu5 from "./assets/images/header/megamenu/megamenu5.avif";
// import megamenu6 from "./assets/images/header/megamenu/megamenu6.avif";
// import megamenu7 from "./assets/images/header/megamenu/megamenu7.avif";

// const fashionLinks = [
//   { text: "FASHION HOME", icon: "fa-solid fa-angle-right" },
//   { text: "THE CHANEL HANDBAG", icon: "fa-solid fa-angle-right" },
// ];

// const latestShows = [
//   {
//     title: "Cruise 2024/25",
//     date: "Available in boutiques from November 2024",
//   },
//   {
//     title: "Fall-Winter 2024/25",
//     date: "Available in boutiques from September 2024",
//   },
//   {
//     title: "2023/24 Metiers d'art",
//     date: "Available in boutiques in June 2024",
//   },
// ];

// const inBoutiques = [
//   "Spring-Summer 2024",
//   "Spring-Summer 2024 Pre-Collection",
//   "The Cruise 2023/24 Collection",
//   "The Iconic Handbag - The Campaign",
//   "Ready-To-Wear",
//   "Handbags",
//   "Shoes",
//   "Costume Jewellery",
//   "Small Leather Goods",
//   "Eyewear",
//   "Other Accessories",
// ];

// const savoirFaire = [
//   "Discover the savoir-faire of the 2023/24 Métiers d'art collection",
// ];

// const chanelNews = ["Discover the latest news"];

// const literaryRendezvous = [
//   "LITERARY RENDEZVOUS AT RUE CAMBON",
//   "Discover the savoir-faire of the 2023/24 Métiers d'art collection",
// ];

// const services = [
//   "A programme of services to preserve each CHANEL creation.",
//   "Find a Boutique",
//   "Book an appointment",
// ];
// const megamenuData = {
//   title: "EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS",
//   image: {
//     src: megamenu2,
//     alt: "megamenu img1",
//     linkText: "FINE JEWELLERY HOME",
//   },
//   sections: [
//     {
//       title: "FEATURED",
//       items: [
//         "Collection N°5",
//         "Coco Crush, The Encounters",
//         "The BLISS BOUTIQ Style Guide",
//         "18 Place Vendôme",
//       ],
//     },
//     {
//       title: "CATEGORIES",
//       items: [
//         "Rings",
//         "Bracelets",
//         "Earrings",
//         "Necklaces",
//         "Brooches",
//         "All Fine Jewellery",
//         "BRIDAL",
//         "Engagement Rings",
//         "Wedding Rings",
//       ],
//     },
//     {
//       title: "COLLECTIONS",
//       items: [
//         "Coco Crush",
//         "N°5",
//         "Camélia",
//         "Ultra",
//         "Comète",
//         "Plume de CHANEL",
//         "Ruban",
//         "All Fine Jewellery",
//       ],
//     },
//     {
//       title: "ADVICE AND SERVICES",
//       items: [
//         "Care and Maintenance",
//         "Our Services",
//         "Where can I take my Jewellery to be repaired?",
//         "Guarantees and Authentication",
//       ],
//     },
//   ],
// };
// const menuItems = [
//   {
//     title: "WATCHES HOME",
//     image: megamenu3,
//     link: "watches-home",
//   },
//   {
//     title: "FEATURED",
//     subItems: [
//       "PREMIÈRE ÉDITION ORIGINALE",
//       "The J12 watches",
//       "J12 Automaton Calibre 6",
//       "The CHANEL Watch Manufacture",
//     ],
//   },
//   {
//     title: "WATCH COLLECTIONS",
//     subItems: [
//       "J12",
//       "PREMIÈRE",
//       "BOY·FRIEND",
//       "Code Coco",
//       "Monsieur de CHANEL",
//       "All Watches",
//     ],
//   },
//   {
//     title: "FINE WATCHMAKING",
//     subItems: [
//       "CHANEL Haute Horlogerie",
//       "Artistic Craft Watches",
//       "Manufacture Movement Watches",
//       "Watches Set with Precious Stones",
//     ],
//     additional: {
//       title: "WATCHMAKING ACCORDING TO CHANEL",
//       subItems: [
//         "CHANEL ceramic",
//         "Haute Horlogerie movements",
//         "18 Place Vendôme",
//       ],
//     },
//   },
//   {
//     title: "ADVICE AND SERVICES",
//     subItems: [
//       "CHANEL",
//       "Care and Maintenance",
//       "Our Services",
//       "Where can I have my Watch repaired?",
//       "Guarantees and Authentication",
//       "Manuals",
//       "Size guide",
//     ],
//   },
// ];

// const menuItems4 = [
//   {
//     title: "EYEWEAR HOME",
//     image:  megamenu4 ,
//     link: "eyewear-home",
//   },
//   {
//     title: "SUNGLASSES",
//     subItems: [
//       "New This Season",
//       "Exclusives",
//       "Timeless",
//       "All Sunglasses",
//       "Virtual Try-On",
//     ],
//   },
//   {
//     title: "OPTICAL",
//     subItems: ["New This Season", "Timeless", "All Optical", "Virtual Try-On"],
//     additional: {
//       title: "BLUE LIGHT GLASSES",
//       subItems: ["All Blue Light Glasses", "Virtual Try-On"],
//     },
//   },
//   {
//     title: "STORIES",
//     subItems: [
//       "Eyewear Campaign",
//       "Two-Tone Signature",
//       "Timeless Codes",
//       "A Tribute to Tweed",
//       "Charming Hearts",
//       "Graphic Lines",
//     ],
//   },
//   {
//     title: "SERVICES",
//     subItems: ["Size Guide", "Care Instructions"],
//   },
// ];

// // const menuItems5 = [
// //   {
// //     title: "FRAGRANCE HOME",
// //     imgSrc: megamenu5,
// //     linkText: "FRAGRANCE HOME",
// //   },
// //   {
// //     title: "IN THE SPOTLIGHT",
// //     subItems: [
// //       "Les Eaux de CHANEL",
// //       "Take your CHANCE",
// //       "Les Couleurs de CHANEL",
// //     ],
// //   },
// //   {
// //     title: "COLLECTIONS",
// //     subItems: ["Les Exclusifs de CHANEL", "Les Eaux de CHANEL"],
// //   },
// //   {
// //     title: "WOMEN",
// //     subItems: [
// //       "N°5",
// //       "Coco Mademoiselle",
// //       "Gabrielle CHANEL",
// //       "Chance",
// //       "Chance Eau Tendre",
// //       "Chance Eau Fraîche",
// //       "Chance Eau Vive",
// //       "Coco",
// //       "Coco Noir",
// //       "Allure Sensuelle",
// //       "Allure",
// //       "N°19",
// //       "Cristalle",
// //       "View all",
// //     ],
// //   },
// //   {
// //     title: "MEN",
// //     subItems: [
// //       "Bleu de CHANEL",
// //       "Allure Homme Sport",
// //       "Allure Homme Sport Eau Extrême",
// //       "Allure Homme",
// //       "Allure Homme Édition Blanche",
// //       "Platinum Égoïste",
// //       "Égoïste",
// //       "Pour Monsieur",
// //       "Antaeus",
// //       "View all",
// //     ],
// //   },
// //   {
// //     title: "BATH AND BODY",
// //     subItems: ["Women", "Men", "View all"],
// //   },
// // ];

// const menuItems5 = [
//   {
//     title: "FRAGRANCE HOME",
//     image: megamenu5,
//     alt: "megamenu img1",
//     items: [],
//   },
//   {
//     title: "IN THE SPOTLIGHT",
//     items: [
//       "Les Eaux de CHANEL",
//       "Les Eaux de CHANEL",
//       "Take your CHANCE",
//       "Les Couleurs de CHANEL",
//     ],
//     subCategories: [
//       {
//         title: "THE CHANEL SELECTION",
//         items: ["The Latest Creations", "Special Editions"],
//       },
//       {
//         title: "CHANEL SERVICES",
//         items: [
//           "Les Rendez-vous CHANEL",
//           "Fragrance & Beauty Boutiques",
//           "Store Locator",
//         ],
//       },
//     ],
//   },
//   {
//     title: "COLLECTIONS",
//     items: ["Les Exclusifs de CHANEL", "Les Eaux de CHANEL"],
//   },
//   {
//     title: "WOMEN",
//     items: [
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
//     items: [
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
//     items: ["Women", "Men", "View all"],
//   },
// ];
// const menuItems6 = [
//   {
//     title: "MAKEUP HOME",
//     imgSrc: megamenu6,
//     linkText: "MAKEUP HOME",
//   },
//   {
//     title: "IN THE SPOTLIGHT",
//     subItems: ["Chanel Beauty Mix Workout", "Chanel Beauty Mix Spa"],
//   },
//   {
//     title: "CHANEL SERVICES",
//     subItems: [
//       "CHANEL Beauty Book",
//       "Les Rendez-vous CHANEL",
//       "Fragrance & Beauty Boutiques",
//       "Store Locator",
//     ],
//   },
//   {
//     title: "LIPS",
//     subItems: [
//       "Lipsticks",
//       "Liquid Lipsticks",
//       "Lip Gloss",
//       "Lip Pencils",
//       "Lip Balms and Lip Care",
//       "View all",
//       "CHANEL TRY ON",
//     ],
//   },
//   {
//     title: "COMPLEXION",
//     subItems: [
//       "Base",
//       "Foundations",
//       "Concealer",
//       "Powders",
//       "Highlighter",
//       "Blush",
//       "Healthy Glow Makeup",
//       "Bronzers",
//       "View all",
//     ],
//   },
//   {
//     title: "EYES",
//     subItems: [
//       "Mascara",
//       "Eyeshadows",
//       "Eyeliners",
//       "Eye Palette",
//       "Brows",
//       "View all",
//       "CHANEL TRY ON",
//     ],
//   },
//   {
//     title: "NAILS",
//     subItems: ["Nail Colour", "Manicure", "View all", "CHANEL TRY ON"],
//   },
//   {
//     title: "BRUSHES AND ACCESSORIES",
//     subItems: [
//       "Complexion Brushes",
//       "Eye Brushes",
//       "Lip Brushes",
//       "Other Accessories",
//       "View all",
//     ],
//   },
// ];

// const menuItems8 = [
//   {
//     title: "BLISS BOUTIQ CULTURE FUND",
//     subItems: ["Discover the Prize", "Discover the Fund"],
//   },
//   {
//     title: "BLISS BOUTIQ CONNECTS",
//     subItems: ["Discover the Podcast"],
//   },
//   {
//     title: "INSIDE BLISS BOUTIQ",
//     subItems: ["Gabrielle Chanel", "100 years of creation", "Chapters"],
//   },
//   {
//     title: "FOMDATION BLISS BOUTIQ",
//     subItems: ["Discover the Fondation"],
//   },
//   {
//     title: "SUSTAINABILITY",
//     subItems: ["Climate"],
//   },
//   {
//     title: "CAREERS",
//     subItems: ["Join CHANEL"],
//   },
// ];

// const menuItems7 = [
//   {
//     title: " ",
//     items: [
//       {
//         image: megamenu7,
//         linkText: "SKINCARE HOME",
//         linkIcon: "fa-solid fa-angle-right",
//       },
//     ],
//   },
//   {
//     title: "IN THE SPOTLIGHT",
//     items: [
//       "Le Lift Pro",
//       "N°1 DE CHANEL",
//       {
//         title: "THE BLISS BOUTIQ SELECTION",
//         subItems: ["The Latest Creations", "Special Editions"],
//       },
//       {
//         title: "CHANEL SERVICES",
//         subItems: [
//           "Les Rendez-vous CHANEL",
//           "Fragrance & Beauty Boutiques",
//           "Store Locator",
//         ],
//       },
//     ],
//   },
//   {
//     title: "BY CATEGORY",
//     items: [
//       "Cleansers & Makeup Removers",
//       "Toners & Lotions",
//       "Serums & Concentrates",
//       "Moisturisers",
//       "Eyes & Lips",
//       "Oils",
//       "Protection",
//       "Masks & Scrubs",
//       "Mists",
//       "Body Care",
//       "Massage Accessories",
//       "View all",
//     ],
//   },
//   {
//     title: "BY COLLECTION",
//     items: [
//       "N°1 DE CHANEL",
//       "Sublimage",
//       "Le Lift & Le Lift Pro",
//       "Hydra Beauty",
//       "Le Blanc",
//       "The Cleansing Collection",
//       "CC Cream",
//       "UV Essentiel",
//     ],
//   },
//   {
//     title: null,
//     items: [
//       "La Solution 10 de CHANEL",
//       "Huile de Jasmin",
//       "La Crème Main",
//       "Body Excellence",
//       "Others",
//       "View all",
//     ],
//   },
// ];

// // ========== megamenu data ============
// const fullMegamenu1 = (
//   <Container maxWidth="xl">
//     <Box>
//       <Grid container columnSpacing={4} justifyContent="center">
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         <Grid item xl={2} xs={12}>
//           <Box mt={{ xs: "20px", xl: "0" }}>
//             <Box sx={{ width: "216px", height: "290px" }}>
//               <img src={megamenu1} alt="megamenu img1" />
//             </Box>
//             <Box>
//               {fashionLinks.map((link, index) => (
//                 <Box
//                   key={index}
//                   className="fs-11"
//                   sx={{
//                     transition: "0.4s",
//                     cursor: "pointer",
//                     fontWeight: "bold",
//                     mt: "15px",
//                     pb: "8px",
//                     display: "inline-block",
//                     borderBottom: "1px solid transparent",
//                     "&:hover": {
//                       borderBottom: "1px solid black",
//                     },
//                   }}
//                 >
//                   {link.text} <i className={link.icon}></i>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         </Grid>

//         <Grid item xl={2} xs={12}>
//           <Box mt={{ xs: "30px", xl: "0" }}>
//             <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
//               LETEST SHOWS
//             </Box>
//             {latestShows.map((show, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   fontWeight: "500",
//                   color: "black",
//                   mt: { xl: "20px", xs: "10px" },
//                 }}
//                 className="fs-14"
//               >
//                 {show.title}
//                 <Box
//                   color="textGray"
//                   className="fs-12"
//                   sx={{ mt: { xl: "20px", xs: "10px" } }}
//                 >
//                   {show.date}
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Grid>

//         <Grid item xl={2} xs={12}>
//           <Box mt={{ xs: "30px", xl: "0" }}>
//             <Box sx={{ fontWeight: "bold", color: "black" }} className="fs-14">
//               IN BOUTIQUES
//             </Box>
//             {inBoutiques.map((item, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   fontWeight: "500",
//                   color: "black",
//                   mt: { xl: "20px", xs: "10px" },
//                 }}
//                 className="fs-14"
//               >
//                 {item}
//               </Box>
//             ))}
//           </Box>
//         </Grid>

//         <Grid item xl={2} xs={12}>
//           <Box mt={{ xs: "30px", xl: "0" }}>
//             <Box>
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 SAVOIR-FAIRE
//               </Box>
//               {savoirFaire.map((text, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     fontWeight: "500",
//                     color: "black",
//                     mt: { xl: "20px", xs: "10px" },
//                   }}
//                   className="fs-14"
//                 >
//                   {text}
//                 </Box>
//               ))}
//             </Box>
//             <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 CHANEL NEWS
//               </Box>
//               {chanelNews.map((text, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     fontWeight: "500",
//                     color: "black",
//                     mt: { xl: "20px", xs: "10px" },
//                   }}
//                   className="fs-14"
//                 >
//                   {text}
//                 </Box>
//               ))}
//             </Box>
//             <Box sx={{ mt: { xl: "50px", xs: "30px" } }}>
//               <Box
//                 sx={{
//                   fontWeight: "bold",
//                   color: "black",
//                   width: { xl: "100%", xs: "80%" },
//                 }}
//                 className="fs-14"
//               >
//                 {literaryRendezvous[0]}
//               </Box>
//               <Box
//                 sx={{
//                   fontWeight: "500",
//                   color: "black",
//                   mt: { xl: "20px", xs: "10px" },
//                 }}
//                 className="fs-14"
//               >
//                 {literaryRendezvous[1]}
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid item xl={2} xs={12}>
//           <Box mt={{ xs: "30px", xl: "0" }}>
//             <Box>
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 SERVICES
//               </Box>
//               {services.map((service, index) => (
//                 <Box key={index} sx={{ mt: { xl: "20px", xs: "10px" } }}>
//                   <Box
//                     sx={{ fontWeight: "bold", color: "black" }}
//                     className="fs-14"
//                   >
//                     {index === 0 ? "CHANEL" : service}
//                   </Box>
//                   {index === 0 && (
//                     <Box color="textGray" className="fs-12" sx={{ mt: "10px" }}>
//                       {service}
//                     </Box>
//                   )}
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   </Container>
// );

// const fullMegamenu2 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xs={12} sx={{ paddingLeft: "unset !important" }}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               textWrap: "wrap !important",
//               py: "50px",
//               width: "100%",
//             }}
//             className="fs-14"
//           >
//             {megamenuData.title}
//           </Box>
//         </Grid>

//         <Grid item xl={2} xs={12}>
//           <Box>
//             <Box sx={{ width: "216px", height: "290px" }}>
//               <img src={megamenuData.image.src} alt={megamenuData.image.alt} />
//             </Box>
//             <Box>
//               <Box
//                 className="fs-11"
//                 sx={{
//                   transition: "0.4s",
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                   mt: "15px",
//                   pb: "8px",
//                   display: "inline-block",
//                   borderBottom: "1px solid transparent",
//                   "&:hover": {
//                     borderBottom: "1px solid black",
//                   },
//                 }}
//               >
//                 {megamenuData.image.linkText}{" "}
//                 <i className="fa-solid fa-angle-right"></i>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         {megamenuData.sections.map((section, index) => (
//           <Grid key={index} item xl={2} xs={12} mt={{ xs: "20px", xl: "0" }}>
//             <Box>
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 {section.title}
//               </Box>
//               {section.items.map((item, itemIndex) => (
//                 <Box
//                   key={itemIndex}
//                   sx={{
//                     fontWeight: "500",
//                     color: "black",
//                     mt: { xl: "20px", xs: "10px" },
//                   }}
//                   className="fs-14"
//                 >
//                   {item}
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );
// const fullMegamenu3 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems.map((menuItem, index) => (
//           <Grid item xl={2} xs={12} key={index}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               <Box style={{ textAlign: "left", py: "10px" }}>
//                 {menuItem.image && (
//                   <Box sx={{ width: "216px", height: "290px" }}>
//                     <img src={menuItem.image} alt={menuItem.title} />
//                   </Box>
//                 )}
//                 <Box
//                   sx={{ fontWeight: "bold", color: "black" }}
//                   className="fs-14"
//                 >
//                   {menuItem.title}
//                 </Box>
//                 {menuItem.subItems && (
//                   <Box>
//                     {menuItem.subItems.map((item, subIndex) => (
//                       <Box
//                         key={subIndex}
//                         sx={{
//                           fontWeight: "500",
//                           color: "black",
//                           mt: { xl: "20px", xs: "10px" },
//                         }}
//                         className="fs-14"
//                       >
//                         {item}
//                       </Box>
//                     ))}
//                   </Box>
//                 )}
//                 {menuItem.additional && (
//                   <Box>
//                     <Box
//                       sx={{
//                         fontWeight: "bold",
//                         color: "black",
//                         mt: { xl: "50px", xs: "30px" },
//                       }}
//                       className="fs-14"
//                     >
//                       {menuItem.additional.title}
//                     </Box>
//                     {menuItem.additional.subItems.map((item, subIndex) => (
//                       <Box
//                         key={subIndex}
//                         sx={{
//                           fontWeight: "500",
//                           color: "black",
//                           mt: { xl: "20px", xs: "10px" },
//                         }}
//                         className="fs-14"
//                       >
//                         {item}
//                       </Box>
//                     ))}
//                   </Box>
//                 )}
//                 {menuItem.link && (
//                   <Box
//                     className="fs-11"
//                     sx={{
//                       transition: "0.4s",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       mt: "15px",
//                       pb: "8px",
//                       display: "inline-block",
//                       borderBottom: "1px solid transparent",
//                       "&:hover": {
//                         borderBottom: "1px solid black",
//                       },
//                     }}
//                   >
//                     {menuItem.link} <i className="fa-solid fa-angle-right"></i>
//                   </Box>
//                 )}
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );

// const fullMegamenu4 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems4.map((menuItem4, index) => (
//           <Grid item xl={2} xs={12} key={index}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               <Box style={{ textAlign: "left", py: "10px" }}>
//                 {menuItem4.image && (
//                   <Box sx={{ width: "216px", height: "290px" }}>
//                     <img src={menuItem4.image} alt={menuItem4.title} />
//                   </Box>
//                 )}
//                 <Box
//                   sx={{ fontWeight: "bold", color: "black" }}
//                   className="fs-14"
//                 >
//                   {menuItem4.title}
//                 </Box>
//                 {menuItem4.subItems && (
//                   <Box>
//                     {menuItem4.subItems.map((item, subIndex) => (
//                       <Box
//                         key={subIndex}
//                         sx={{
//                           fontWeight: "500",
//                           color: "black",
//                           mt: { xl: "20px", xs: "10px" },
//                         }}
//                         className="fs-14"
//                       >
//                         {item}
//                       </Box>
//                     ))}
//                   </Box>
//                 )}
//                 {menuItem4.additional && (
//                   <Box>
//                     <Box
//                       sx={{
//                         fontWeight: "bold",
//                         color: "black",
//                         mt: { xl: "50px", xs: "30px" },
//                       }}
//                       className="fs-14"
//                     >
//                       {menuItem4.additional.title}
//                     </Box>
//                     {menuItem4.additional.subItems.map((item, subIndex) => (
//                       <Box
//                         key={subIndex}
//                         sx={{
//                           fontWeight: "500",
//                           color: "black",
//                           mt: { xl: "20px", xs: "10px" },
//                         }}
//                         className="fs-14"
//                       >
//                         {item}
//                       </Box>
//                     ))}
//                   </Box>
//                 )}
//                 {menuItem4.link && (
//                   <Box
//                     className="fs-11"
//                     sx={{
//                       transition: "0.4s",
//                       cursor: "pointer",
//                       fontWeight: "bold",
//                       mt: "15px",
//                       pb: "8px",
//                       display: "inline-block",
//                       borderBottom: "1px solid transparent",
//                       "&:hover": {
//                         borderBottom: "1px solid black",
//                       },
//                     }}
//                   >
//                     {menuItem4.link} <i className="fa-solid fa-angle-right"></i>
//                   </Box>
//                 )}
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );

// // const fullMegamenu5 = (
// //   <Container maxWidth={"xl"}>
// //     <Box>
// //       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
// //         {menuItems5.map((item, index) => (
// //           <Grid item xl={2} xs={12} key={index}>
// //             <Box mt={{ xs: "30px", xl: "0" }}>
// //               {item.imgSrc && (
// //                 <Box sx={{ width: "216px", height: "290px" }}>
// //                   <img src={item.imgSrc} alt={`megamenu img${index}`} />
// //                 </Box>
// //               )}
// //               <Box
// //                 sx={{ fontWeight: "bold", color: "black" }}
// //                 className="fs-14"
// //               >
// //                 {item.title}
// //               </Box>

// //               {item.subItems &&
// //                 item.subItems.map((subItem, subIndex) => (
// //                   <Box
// //                     key={subIndex}
// //                     className="fs-14"
// //                     sx={{
// //                       fontWeight: "500",
// //                       color: "black",
// //                       mt: { xl: "20px", xs: "10px" },
// //                     }}
// //                   >
// //                     {subItem}
// //                   </Box>
// //                 ))}
// //             </Box>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   </Container>
// // );

// const fullMegamenu6 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems6.map((item, index) => (
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

// const fullMegamenu7 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems7.map((section, index) => (
//           <Grid key={index} item xl={2} xs={12}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               {section.title && (
//                 <Box
//                   sx={{ fontWeight: "bold", color: "black" }}
//                   className="fs-14"
//                 >
//                   {section.title}
//                 </Box>
//               )}
//               {section.items.map((item, idx) => (
//                 <Box key={idx} mt={{ xl: "20px", xs: "10px" }}>
//                   {typeof item === "string" ? (
//                     <Box
//                       sx={{ fontWeight: "500", color: "black" }}
//                       className="fs-14"
//                     >
//                       {item}
//                     </Box>
//                   ) : (
//                     <Box>
//                       {item.image && (
//                         <Box sx={{ width: "216px", height: "290px" }}>
//                           <img
//                             src={item.image}
//                             alt={`megamenu img${index + 1}`}
//                           />
//                         </Box>
//                       )}
//                       {item.linkText && (
//                         <Box
//                           className="fs-11"
//                           sx={{
//                             transition: "0.4s",
//                             cursor: "pointer",
//                             fontWeight: "bold",
//                             mt: "15px",
//                             pb: "8px",
//                             display: "inline-block",
//                             borderBottom: "1px solid transparent",
//                             "&:hover": {
//                               borderBottom: "1px solid black",
//                             },
//                           }}
//                         >
//                           {item.linkText} <i className={item.linkIcon}></i>
//                         </Box>
//                       )}
//                       {item.title && (
//                         <Box
//                           sx={{ fontWeight: "bold", color: "black" }}
//                           className="fs-14"
//                         >
//                           {item.title}
//                         </Box>
//                       )}
//                       {item.subItems &&
//                         item.subItems.map((subItem, subIdx) => (
//                           <Box
//                             key={subIdx}
//                             sx={{
//                               fontWeight: "500",
//                               color: "black",
//                               mt: { xl: "20px", xs: "10px" },
//                             }}
//                             className="fs-14"
//                           >
//                             {subItem}
//                           </Box>
//                         ))}
//                     </Box>
//                   )}
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );

// const fullMegamenu8 = (
//   <Container maxWidth="xl">
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems8.map((menuItem, index) => (
//           <Grid item xl={2} xs={12} key={index}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 {menuItem.title}
//               </Box>
//               {menuItem.subItems &&
//                 menuItem.subItems.map((subItem, subIndex) => (
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

// export {
//   fullMegamenu1,
//   fullMegamenu2,
//   fullMegamenu3,
//   fullMegamenu4,
//   // fullMegamenu5,
//   fullMegamenu6,
//   fullMegamenu7,
//   fullMegamenu8,
// };

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

const menCategory = [
  { title: "All Menswear" },
  { title: "Jackets & Coats" },
  { title: "Sweaters & Cardigans" },
  { title: "Suits" },
  { title: "Shirts" },
  { title: "Polo Shirts" },
  { title: "Jeans" },
  { title: "Trousers" },
  { title: "Shoes" },
  { title: "T-Shirts" },
  { title: "Sweats" },
  { title: "Blazers" },
  { title: "Tracksuits" },
  { title: "Nightwear & Loungewear" },
  { title: "Underwear & Socks" },
  { title: "Beachwear" },
  { title: "Belts" },
  { title: "Watches" },
  { title: "More Accessories" },
];

const womenCategory = [
  { title: "All Womenswear" },
  { title: "Sweaters & Cardigans" },
  { title: "Dresses" },
  { title: "Jackets & Coats" },
  { title: "Sweats" },
  { title: "Blouses" },
  { title: "Jeans" },
  { title: "Trousers & Shorts" },
  { title: "Shoes" },
  { title: "T-Shirts & Tops" },
  { title: "Blazers" },
  { title: "Suits" },
  { title: "Skirts" },
  { title: "Tracksuits" },
  { title: "Nightwear & Loungewear" },
  { title: "Underwear & Socks" },
  { title: "Swimwear" },
  { title: "Bags" },
  { title: "More Accessories" },
];

const newInMen = [
  { title: "All New Arrivals" },
  { title: "Clothing" },
  { title: "Shoes" },
  { title: "Accessories" },
  { title: "BOSS RECOMMENDS" },
  { title: "Evening Wear" },
];

const newInWomen = [
  { title: "All New Arrivals" },
  { title: "Clothing" },
  { title: "Shoes" },
  { title: "Accessories" },
  { title: "Evening Wear" },
];

const clothing = [
  { title: "All Clothing" },
  { title: "Jackets" },
  { title: "Coats" },
  { title: "Sweaters & Cardigans" },
  { title: "Jeans" },
  { title: "Trousers & Shorts" },
  { title: "Tracksuits" },
  { title: "Sweatshirts & Hoodies" },
  { title: "Suits" },
  { title: "Shirts" },
  { title: "Polo Shirts" },
  { title: "T-Shirts" },
  { title: "Blazers" },
  { title: "Nightwear & Loungewear" },
  { title: "Underwear" },
  { title: "Beachwear" },
  { title: "Essentials" },
];

const shoes = [
  { title: "All Shoes" },
  { title: "Sneakers" },
  { title: "Business Shoes" },
  { title: "Casual Shoes" },
  { title: "Boots" },
  { title: "Loafers" },
  { title: "Evening Shoes" },
  { title: "Slides & Flip Flops" },
];

const accessories = [
  { title: "All Accessories" },
  { title: "Socks" },
  { title: "Watches" },
  { title: "Bags" },
  { title: "Belts" },
  { title: "Wallets" },
  { title: "Caps & Beanies" },
  { title: "Scarves" },
  { title: "Glasses" },
  { title: "Cufflinks & Jewellery" },
  { title: "Ties & Pocket Squares" },
  { title: "More Accessories" },
  { title: "Dog Accessories" },
];

const thesuit = [
  { title: "Business" },
  { title: "Occasion" },
  { title: "Casual" },
  { title: "Performance" },
];

const gifts = [
  { title: "Gifts for him" },
  { title: "Gift Sets" },
  { title: "Home & Lifestyle Gifts" },
  { title: "Gifts for Dogs" },
  { title: "Gift Finder" },
];

const womensclothing = [
  { title: "All Clothing" },
  { title: "Jackets" },
  { title: "Coats" },
  { title: "Dresses & Jumpsuits" },
  { title: "Sweaters & Cardigans" },
  { title: "T-Shirts & Tops" },
  { title: "Jeans" },
  { title: "Trousers & Shorts" },
  { title: "Suits" },
  { title: "Blouses" },
  { title: "Blazers" },
  { title: "Skirts" },
  { title: "Sweatshirts & Hoodies" },
  { title: "Nightwear & Loungewear" },
  { title: "Underwear" },
  { title: "Beachwear" },
  { title: "Essentials" },
];

const womensshoes = [
  { title: "All Shoes" },
  { title: "Sneakers" },
  { title: "Boots" },
  { title: "Pumps" },
  { title: "Flats" },
];

const womensaccessories = [
  { title: "All Accessories" },
  { title: "Socks" },
  { title: "Bags" },
  { title: "Belts" },
  { title: "Wallets & Key Rings" },
  { title: "Jewellery" },
  { title: "Watches" },
  { title: "Scarves" },
  { title: "Beanies & Gloves" },
  { title: "Glasses" },
  { title: "Caps" },
  { title: "More Accessories" },
  { title: "Dog Accessories" },
];

const womensgifts = [
  { title: "Gifts for her" },
  { title: "Home & Lifestyle Gifts" },
  { title: "Gifts for Dogs" },
  { title: "Gift Finder" },
];

const sportsMen = [
  { title: "All Sportswear" },
  { title: "Gym & Running" },
  { title: "Golf" },
  { title: "Tennis & Padel" },
  { title: "Outdoor Clothing" },
  { title: "Cycling" },
  { title: "Equestrian" },
  { title: "Ski Collection" },
  { title: "Swimwear" },
];

const sportsWomen = [
  { title: "All Sportswear" },
  { title: "Equestrian" },
  { title: "Cycling" },
  { title: "Gym" },
  { title: "Ski Collection" },
  { title: "Swimwear" },
];

const discoverMen = [
  { title: "BOSS RECOMMENDS" },
  { title: "Evening Wear" },
  { title: "Winter Outfits" },
  { title: "BOSS x Shohei Ohtani" },
  { title: "BOSS SELECTED BY BECKHAM" },
  { title: "Be Your Own BOSS" },
  { title: "Fashion-Show Guest Looks" },
  { title: "Porsche x BOSS Collection" },
  { title: "Business Outfits" },
  { title: "Performance" },
  { title: "Big & Tall" },
  { title: "WE CARE" },
  { title: "Inspiration" },
  { title: "BOSS x Aston Martin" },
];

const discoverWomen = [
  { title: "BOSS RECOMMENDS" },
  { title: "Evening Wear" },
  { title: "Winter Outfits" },
  { title: "Be Your Own BOSS" },
  { title: "Fashion-Show Guest Looks" },
  { title: "Business Outfits" },
  { title: "Leather" },
  { title: "Knitwear" },
  { title: "Fashion Trends" },
  { title: "Co ord sets" },
  { title: "WE CARE" },
  { title: "Inspiration" },
];


// ========== megamenu data ============
const fullMegamenu1 = (
  <Container>
    <Box py={"50px"}>
      <Grid container columnSpacing={4}>
        {/* <Grid item xl={12}>
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
        </Grid> */}

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              men
            </Box>
            {menCategory.map((show, index) => (
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
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              women
            </Box>
            {womenCategory.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* <Grid item xl={2} xs={12}>
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
        </Grid> */}
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu2 = (
  <Container>
    <Box py={"50px"}>
      <Grid container columnSpacing={4}>
        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              men
            </Box>
            {newInMen.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              women
            </Box>
            {newInWomen.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);
const fullMegamenu3 = (
  // <Container maxWidth={"xl"}>
  //   <Box>
  //     <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
  //       {/* <Grid item xl={12}>
  //         <Box
  //           sx={{
  //             fontWeight: "bold",
  //             color: "black",
  //             textAlign: "center",
  //             py: "50px",
  //             textWrap: "wrap !important",
  //           }}
  //           className="fs-14"
  //         >
  //           EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
  //         </Box>{" "}
  //       </Grid> */}
  //       {/* {menuItems.map((menuItem, index) => (
  //         <Grid item xl={2} xs={12} key={index}>
  //           <Box mt={{ xs: "30px", xl: "0" }}>
  //             <Box style={{ textAlign: "left", py: "10px" }}>
  //               {menuItem.image && (
  //                 <Box sx={{ width: "216px", height: "290px" }}>
  //                   <img src={menuItem.image} alt={menuItem.title} />
  //                 </Box>
  //               )}
  //               <Box
  //                 sx={{ fontWeight: "bold", color: "black" }}
  //                 className="fs-14"
  //               >
  //                 {menuItem.title}
  //               </Box>
  //               {menuItem.subItems && (
  //                 <Box>
  //                   {menuItem.subItems.map((item, subIndex) => (
  //                     <Box
  //                       key={subIndex}
  //                       sx={{
  //                         fontWeight: "500",
  //                         color: "black",
  //                         mt: { xl: "20px", xs: "10px" },
  //                       }}
  //                       className="fs-14"
  //                     >
  //                       {item}
  //                     </Box>
  //                   ))}
  //                 </Box>
  //               )}
  //               {menuItem.additional && (
  //                 <Box>
  //                   <Box
  //                     sx={{
  //                       fontWeight: "bold",
  //                       color: "black",
  //                       mt: { xl: "50px", xs: "30px" },
  //                     }}
  //                     className="fs-14"
  //                   >
  //                     {menuItem.additional.title}
  //                   </Box>
  //                   {menuItem.additional.subItems.map((item, subIndex) => (
  //                     <Box
  //                       key={subIndex}
  //                       sx={{
  //                         fontWeight: "500",
  //                         color: "black",
  //                         mt: { xl: "20px", xs: "10px" },
  //                       }}
  //                       className="fs-14"
  //                     >
  //                       {item}
  //                     </Box>
  //                   ))}
  //                 </Box>
  //               )}
  //               {menuItem.link && (
  //                 <Box
  //                   className="fs-11"
  //                   sx={{
  //                     transition: "0.4s",
  //                     cursor: "pointer",
  //                     fontWeight: "bold",
  //                     mt: "15px",
  //                     pb: "8px",
  //                     display: "inline-block",
  //                     borderBottom: "1px solid transparent",
  //                     "&:hover": {
  //                       borderBottom: "1px solid black",
  //                     },
  //                   }}
  //                 >
  //                   {menuItem.link} <i className="fa-solid fa-angle-right"></i>
  //                 </Box>
  //               )}
  //             </Box>
  //           </Box>
  //         </Grid>
  //       ))} */}
  //     </Grid>
  //   </Box>
  // </Container>

  <Container maxWidth={"xl"}>
    <Box py={"40px"}>
      <Grid container columnSpacing={4} justifyContent={"center"}>
        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              clothing
            </Box>
            {clothing.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              shoes
            </Box>
            {shoes.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              accessories
            </Box>
            {accessories.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              the suit
            </Box>
            {thesuit.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={2} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              gifts
            </Box>
            {gifts.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* <Grid item xl={2} xs={12}>
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
        </Grid> */}
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu4 = (
  // <Container maxWidth={"xl"}>
  //   <Box>
  //     <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
  //       <Grid item xl={12}>
  //         <Box
  //           sx={{
  //             fontWeight: "bold",
  //             color: "black",
  //             textAlign: "center",
  //             py: "50px",
  //             textWrap: "wrap !important",
  //           }}
  //           className="fs-14"
  //         >
  //           EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
  //         </Box>{" "}
  //       </Grid>
  //       {menuItems4.map((menuItem4, index) => (
  //         <Grid item xl={2} xs={12} key={index}>
  //           <Box mt={{ xs: "30px", xl: "0" }}>
  //             <Box style={{ textAlign: "left", py: "10px" }}>
  //               {menuItem4.image && (
  //                 <Box sx={{ width: "216px", height: "290px" }}>
  //                   <img src={menuItem4.image} alt={menuItem4.title} />
  //                 </Box>
  //               )}
  //               <Box
  //                 sx={{ fontWeight: "bold", color: "black" }}
  //                 className="fs-14"
  //               >
  //                 {menuItem4.title}
  //               </Box>
  //               {menuItem4.subItems && (
  //                 <Box>
  //                   {menuItem4.subItems.map((item, subIndex) => (
  //                     <Box
  //                       key={subIndex}
  //                       sx={{
  //                         fontWeight: "500",
  //                         color: "black",
  //                         mt: { xl: "20px", xs: "10px" },
  //                       }}
  //                       className="fs-14"
  //                     >
  //                       {item}
  //                     </Box>
  //                   ))}
  //                 </Box>
  //               )}
  //               {menuItem4.additional && (
  //                 <Box>
  //                   <Box
  //                     sx={{
  //                       fontWeight: "bold",
  //                       color: "black",
  //                       mt: { xl: "50px", xs: "30px" },
  //                     }}
  //                     className="fs-14"
  //                   >
  //                     {menuItem4.additional.title}
  //                   </Box>
  //                   {menuItem4.additional.subItems.map((item, subIndex) => (
  //                     <Box
  //                       key={subIndex}
  //                       sx={{
  //                         fontWeight: "500",
  //                         color: "black",
  //                         mt: { xl: "20px", xs: "10px" },
  //                       }}
  //                       className="fs-14"
  //                     >
  //                       {item}
  //                     </Box>
  //                   ))}
  //                 </Box>
  //               )}
  //               {menuItem4.link && (
  //                 <Box
  //                   className="fs-11"
  //                   sx={{
  //                     transition: "0.4s",
  //                     cursor: "pointer",
  //                     fontWeight: "bold",
  //                     mt: "15px",
  //                     pb: "8px",
  //                     display: "inline-block",
  //                     borderBottom: "1px solid transparent",
  //                     "&:hover": {
  //                       borderBottom: "1px solid black",
  //                     },
  //                   }}
  //                 >
  //                   {menuItem4.link} <i className="fa-solid fa-angle-right"></i>
  //                 </Box>
  //               )}
  //             </Box>
  //           </Box>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // </Container>
  <Container>
    <Box py={"40px"}>
      <Grid container columnSpacing={4} justifyContent={"center"}>
        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              clothing
            </Box>
            {womensclothing.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              shoes
            </Box>
            {womensshoes.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              accessories
            </Box>
            {womensaccessories.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              gifts
            </Box>
            {womensgifts.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu5 = (
  // <Container maxWidth={"xl"}>
  //   <Box>
  //     <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
  //       {menuItems5.map((item, index) => (
  //         <Grid item xl={2} xs={12} key={index}>
  //           <Box mt={{ xs: "30px", xl: "0" }}>
  //             {item.imgSrc && (
  //               <Box sx={{ width: "216px", height: "290px" }}>
  //                 <img src={item.imgSrc} alt={`megamenu img${index}`} />
  //               </Box>
  //             )}
  //             <Box
  //               sx={{ fontWeight: "bold", color: "black" }}
  //               className="fs-14"
  //             >
  //               {item.title}
  //             </Box>

  //             {item.subItems &&
  //               item.subItems.map((subItem, subIndex) => (
  //                 <Box
  //                   key={subIndex}
  //                   className="fs-14"
  //                   sx={{
  //                     fontWeight: "500",
  //                     color: "black",
  //                     mt: { xl: "20px", xs: "10px" },
  //                   }}
  //                 >
  //                   {subItem}
  //                 </Box>
  //               ))}
  //           </Box>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // </Container>
  <Container>
    <Box py={"50px"}>
      <Grid container columnSpacing={4}>
        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              men
            </Box>
            {sportsMen.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              women
            </Box>
            {sportsWomen.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

const fullMegamenu6 = (
  // <Container maxWidth={"xl"}>
  //   <Box>
  //     <Grid container spacing={4} justifyContent="center">
  //       <Grid item xl={12}>
  //         <Box
  //           sx={{
  //             fontWeight: "bold",
  //             color: "black",
  //             textAlign: "center",
  //             py: "50px",
  //             textWrap: "wrap !important",
  //           }}
  //           className="fs-14"
  //         >
  //           EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
  //         </Box>{" "}
  //       </Grid>
  //       {menuItems6.map((item, index) => (
  //         <Grid item xl={2} xs={12} key={index}>
  //           <Box mt={{ xs: "30px", xl: "0" }}>
  //             {item.imgSrc && (
  //               <Box sx={{ width: "216px", height: "290px" }}>
  //                 <img src={item.imgSrc} alt={`megamenu img${index}`} />
  //               </Box>
  //             )}
  //             <Box
  //               sx={{ fontWeight: "bold", color: "black" }}
  //               className="fs-14"
  //             >
  //               {item.title}
  //             </Box>

  //             {item.subItems &&
  //               item.subItems.map((subItem, subIndex) => (
  //                 <Box
  //                   key={subIndex}
  //                   className="fs-14"
  //                   sx={{
  //                     fontWeight: "500",
  //                     color: "black",
  //                     mt: { xl: "20px", xs: "10px" },
  //                   }}
  //                 >
  //                   {subItem}
  //                 </Box>
  //               ))}
  //           </Box>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // </Container>

  <Container>
    <Box py={"50px"}>
      <Grid container columnSpacing={4}>
        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              men
            </Box>
            {discoverMen.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xl={3} xs={12}>
          <Box mt={{ xs: "30px", xl: "0" }}>
            <Box
              sx={{
                fontWeight: "900",
                color: "black",
                textTransform: "uppercase",
              }}
              className="fs-14 lato"
            >
              women
            </Box>
            {discoverWomen.map((item, index) => (
              <Box
                key={index}
                sx={{
                  fontWeight: "500",
                  color: "black",
                  mt: { xl: "20px", xs: "10px" },
                }}
                className="fs-14"
              >
                {item.title}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>

);

// const fullMegamenu7 = (
//   <Container maxWidth={"xl"}>
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems7.map((section, index) => (
//           <Grid key={index} item xl={2} xs={12}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               {section.title && (
//                 <Box
//                   sx={{ fontWeight: "bold", color: "black" }}
//                   className="fs-14"
//                 >
//                   {section.title}
//                 </Box>
//               )}
//               {section.items.map((item, idx) => (
//                 <Box key={idx} mt={{ xl: "20px", xs: "10px" }}>
//                   {typeof item === "string" ? (
//                     <Box
//                       sx={{ fontWeight: "500", color: "black" }}
//                       className="fs-14"
//                     >
//                       {item}
//                     </Box>
//                   ) : (
//                     <Box>
//                       {item.image && (
//                         <Box sx={{ width: "216px", height: "290px" }}>
//                           <img
//                             src={item.image}
//                             alt={`megamenu img${index + 1}`}
//                           />
//                         </Box>
//                       )}
//                       {item.linkText && (
//                         <Box
//                           className="fs-11"
//                           sx={{
//                             transition: "0.4s",
//                             cursor: "pointer",
//                             fontWeight: "bold",
//                             mt: "15px",
//                             pb: "8px",
//                             display: "inline-block",
//                             borderBottom: "1px solid transparent",
//                             "&:hover": {
//                               borderBottom: "1px solid black",
//                             },
//                           }}
//                         >
//                           {item.linkText} <i className={item.linkIcon}></i>
//                         </Box>
//                       )}
//                       {item.title && (
//                         <Box
//                           sx={{ fontWeight: "bold", color: "black" }}
//                           className="fs-14"
//                         >
//                           {item.title}
//                         </Box>
//                       )}
//                       {item.subItems &&
//                         item.subItems.map((subItem, subIdx) => (
//                           <Box
//                             key={subIdx}
//                             sx={{
//                               fontWeight: "500",
//                               color: "black",
//                               mt: { xl: "20px", xs: "10px" },
//                             }}
//                             className="fs-14"
//                           >
//                             {subItem}
//                           </Box>
//                         ))}
//                     </Box>
//                   )}
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );

// const fullMegamenu8 = (
//   <Container maxWidth="xl">
//     <Box>
//       <Grid container columnSpacing={4} justifyContent={{ xl: "center" }}>
//         <Grid item xl={12}>
//           <Box
//             sx={{
//               fontWeight: "bold",
//               color: "black",
//               textAlign: "center",
//               py: "50px",
//               textWrap: "wrap !important",
//             }}
//             className="fs-14"
//           >
//             EXCLUSIVELY IN BOUTIQUES AND AUTHORIZED RETAILERS
//           </Box>{" "}
//         </Grid>
//         {menuItems8.map((menuItem, index) => (
//           <Grid item xl={2} xs={12} key={index}>
//             <Box mt={{ xs: "30px", xl: "0" }}>
//               <Box
//                 sx={{ fontWeight: "bold", color: "black" }}
//                 className="fs-14"
//               >
//                 {menuItem.title}
//               </Box>
//               {menuItem.subItems &&
//                 menuItem.subItems.map((subItem, subIndex) => (
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

export {
  fullMegamenu1,
  fullMegamenu2,
  fullMegamenu3,
  fullMegamenu4,
  fullMegamenu5,
  fullMegamenu6,
  // fullMegamenu7,
  // fullMegamenu8,
};

// MEN
//
//
//
//
//
//
// Jeans
// Trousers
// Shoes
// T-Shirts
// Sweats
// Blazers
// Tracksuits
// Nightwear & Loungewear
// Underwear & Socks
// Beachwear
// Belts
// Watches
// More Acccessories
// WOMEN
// All Womenswear
// Sweaters & Cardigans
// Dresses
// Jackets & Coats
// Sweats
// Blouses
// Jeans
// Trousers & Shorts
// Shoes
// T-Shirts & Tops
// Blazers
// Suits
// Skirts
// Tracksuits
// Nightwear & Loungewear
// Underwear & Socks
// Swimwear
// Bags
// More Acccessories
// Shop Jackets for women by Hugo Boss
// JACKETS
// Shop Jackets for women by Hugo Boss
// JACKETS
// Discounted knitwear for men by Hugo Boss
// SWEATERS & CARDIGANS
// Discounted knitwear for men by Hugo Boss
// SWEATERS & CARDIGANS
// Coats for Men by Hugo Boss
// COATS
// Coats for Men by Hugo Boss
// COATS

// New In
// Men
// Women
// Sports
// Discover

// 1

// Wish List
// Contact & Service
// Language
// IN (₹)
// Store locator
// All Brands
// Male and female models in BOSS
// Sale
// Further reductions:
// Up to 50% off WINTER STYLES
// For him
// For her
// Shop the BOSS New In Collection for Men and Women
// New Year,
// New Styles
// For him
// For her
// WARDROBE REFRESHERS
// Shop the Businesswear Collection for Men by BOSS
// Back to
// Business
// Shop the Businesswear Collection for Women by BOSS
// Back to
// Business
// Shop the Casualwear and Leisurewear Collection for Men by BOSS
// Off-Duty Dressing
// Shop the Casualwear and Leisurewear Collection for Women by BOSS
// Off-Duty Dressing
// Shop the New Winter Collection for Men by BOSS
// The Latest Layers
// Shop the New Winter Collection for Women by BOSS
// The Latest Layers

// Shop the Sportswear Collection for Men and Women by BOSS
// UNLOCK YOUR POTENTIAL
// For him
// For her
// Shop Sneakers for Men and Women by BOSS
// Just-Landed
// Sneakers
// For him
// For her
// Skip breadcrumb
// You are here  Shop  BOSS
// Matteo Berrettini in BOSS new collection
// HUGO BOSS Newsletter
// Get the latest news from the HUGO BOSS Online Store regarding new products, exclusive specials, lifestyle and fashion trends.
// Subscribe now
// HUGO BOSS EXPERIENCE
// HB EXPERIENCE
// Join our HUGO BOSS EXPERIENCE community to receive exclusive benefits such as Members’ Only promotions, invitations to events, access to exclusive products and much more. Sign up today and enjoy a variety of benefits, from exclusive gifts to VIP prizes!
// Discover more
// WE CARE
// Boss Podcast
// At HUGO BOSS, we strive to maximise our positive impact and become better every day. We continually champion future-friendly practices when designing and producing our products.
// Discover more
// Contact
// LIVE CHAT & STYLE ADVICE
// Customer Care
// WhatsApp**
// Email us
// Store Locator
// Help & Contact
// Services
// Delivery
// How to Return
// Returns portal
// BOLD FOR THE PLANET
// FAQ
// Our Company
// Careers
// Investor Relations
// Sustainability
// Press
// HUGO BOSS Sale
// Corporate Website
// FOLLOW US
// Change country:
// भारत
// Imprint
// Privacy Statement
// Privacy Statement HUGO BOSS EXPERIENCE
// Privacy Statement HUGO BOSS Newsletter
// Terms & Conditions
// Terms & Conditions HUGO BOSS EXPERIENCE
// Terms of use
// Cookie settings
// © 2024 HUGO BOSS All rights reserved.
