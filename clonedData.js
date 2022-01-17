// // "use strict";

// // const pics = document.getElementsByClassName("elc-img");

// // const picsCologne = [
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L00401_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L10G01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L26L01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3AF01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L41501_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L5LK01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L32R01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L7JL01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L51C01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L08E01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L29A01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L2H601_670x670_0.png",
// //   "",
// //   "",
// //   "",
// //   "",
// // ];

// // const namesOfCologne = [
// //   "Lime Basil & Mandarin Cologne",
// //   "Pomegranate Noir Cologne",
// //   "English Pear & Freesia Cologne",
// //   "Peony & Blush Suede Cologne",
// //   "Wood Sage & Sea Salt Cologne",
// //   "Myrrh & Tonka Cologne Intense",
// //   "Blackberry & Bay Cologne",
// //   "Honeysuckle & Davana Cologne",
// //   "Mimosa & Cardamom Cologne",
// //   "Red Roses Cologne",
// //   "Oud & Bergamot Cologne Intense",
// //   "Wild Bluebell Cologne",
// //   "Poppy & Barley Cologne",
// //   "Grapefruit Cologne",
// //   "Earl Grey & Cucumber Cologne",
// //   "Velvet Rose & Oud Cologne Intense",
// // ];

// // const priceCologne = [
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$196.00",
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$196.00",
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$145.00",
// //   "$196.00",
// // ];

// // ///bestseller or not
// // const badges = [
// //   "BESTSELLER",
// //   "BESTSELLER",
// //   "BESTSELLER",
// //   "BESTSELLER",
// //   "ONLINE EXCLUSIVE",
// // ];

// // ///size of Cologne

// // const sizeOfCologne = [
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// //   "100ml",
// // ];

// // //////////bath and body img calss name elc-img

// // const imagesBB = [
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L4H401_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L6F501_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L9L001_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L4P501_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L71W01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L51G01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L35P01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3X501_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L9KK01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L4Y501_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L6A701_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L6A401_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L4PJ01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L11R01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L9KL01_670x670_0.png",
// //   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L5KK01_670x670_0.png",
// // ];

// // ///bb names elc-heading--3 cn

// // const bbNames = [
// //   "Lime Basil & Mandarin Body & Hand Lotion",
// //   "Peony & Blush Suede Bath Oil",
// //   "Pomegranate Noir Exfoliating Shower Gel",
// //   "English Pear & Freesia Body Crème",
// //   "Myrrh & Tonka Shower Oil",
// //   "Mimosa & Cardamom Body Crème",
// //   "Vitamin E Lip Conditioner",
// //   "Velvet Rose & Oud Dry Body Oil",
// //   "Lime Basil & Mandarin Hand Cream",
// //   "Pomegranate Noir Bath Oil",
// //   "Lime Basil & Mandarin Body & Hand Wash",
// //   "English Pear & Freesia Body & Hand Wash",
// //   "Wood Sage & Sea Salt Body Crème",
// //   "Vitamin E Hand Treatment",
// //   "English Pear & Freesia Hand Cream",
// //   "English Mint & Ginger Lip Care",
// // ];

// // ///bb price js-formatted-price
// // const bbPrice = [
// //   "$62.00",
// //   "$69.00",
// //   "$46.00",
// //   "$86.00",
// //   "$58.00",
// //   "$86.00",
// //   "$36.00",
// //   "$86.00",
// //   "$32.00",
// //   "$69.00",
// //   "$46.00",
// //   "$46.00",
// //   "$86.00",
// //   "$62.00",
// //   "$32.00",
// //   "$30.00",
// // ];

// // ///bbsize elc-size

// // const bbSizes = [
// //   "250ml",
// //   "250ml",
// //   "200ml",
// //   "175ml",
// //   "250ml",
// //   "175ml",
// //   "15ml",
// //   "100ml",
// //   "50ml",
// //   "250ml",
// //   "250ml",
// //   "250ml",
// //   "175ml",
// //   "100ml",
// //   "50ml",
// //   "9ml",
// // ];

// ////home essentials pictures elc-img
// const homeEsImg = [
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L0W201_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L92W01_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L36101_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3AK01_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L10H01_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3FA01_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L96A01_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L36901_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L2W501_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L2W701_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3X601_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L41901_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L2A601_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3AG01_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L0W401_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L2W601_670x670_0.png",
//   "https://www.jomalone.com/media/export/cms/products/670x670/jo_sku_L3AL01_670x670_0.png",
// ];

// ///HE name
// const homeEsNames = [
//   "Lime Basil & Mandarin Home Candle",
//   "Myrrh & Tonka Scent Surround™ Diffuser",
//   "Pomegranate Noir Deluxe Candle",
//   "English Pear & Freesia Room Spray",
//   "Pomegranate Noir Home Candle",
//   "Oud & Bergamot Home Candle",
//   "English Pear & Freesia Deluxe Candle",
//   "Pomegranate Noir Luxury Candle",
//   "Lime Basil & Mandarin Scent Surround™ Diffuser",
//   "Red Roses Scent Surround™ Diffuser",
//   "Velvet Rose & Oud Home Candle",
//   "Wood Sage & Sea Salt Home Candle",
//   "English Pear & Freesia Home Candle",
//   "Peony & Blush Suede Home Candle",
//   "Orange Blossom Home Candle",
//   "Pomegranate Noir Scent Surround™ Diffuser",
//   "English Pear & Freesia Scent Surround™ Diffuser",
// ];

// ///price

// const homeEsPrice = [
//   "$70.00",
//   "$125.00",
//   "$210.00",
//   "$72.00",
//   "$70.00",
//   "$95.00",
//   "$210.00",
//   "$515.00",
//   "$100.00",
//   "$100.00",
//   "$95.00",
//   "$70.00",
//   "$70.00",
//   "$70.00",
//   "$70.00",
//   "$100.00",
//   "$100.00",
// ];

// ///homeEs size
// const homeEsSize = [
//   "200g",
//   "165ml",
//   "600g",
//   "175ml",
//   "200g",
//   "200g",
//   "600g",
//   "2.5kg",
//   "165ml",
//   "165ml",
//   "200g",
//   "200g",
//   "200g",
//   "200g",
//   "200g",
//   "165ml",
//   "165ml",
// ];

// // ////////---------Home Essentials object
// // ///adding names to home essentials object
// const homeData = [];
// homeEsNames.forEach((el, i) =>
//   homeData.push({
//     productName: homeEsNames[i],
//   })
// );
// console.log(homeData);

// // ////adding images to home essentials data
// // homeData.forEach((el, i) => (el.image = homeEsImg[i]));

// // ///adding price to home essential data
// // homeData.forEach((el, i) => (el.price = homeEsPrice[i]));

// // ///adding the size to home essential data

// // homeData.forEach((el, i) => (el.size = homeEsSize[i]));
// // // console.log(homeData);

// // ////---------BB Object

// // const bbObj = [];
// // ///adding names to BB Object
// // bbNames.forEach((el, i) => bbObj.push({ productName: bbNames[i] }));

// // //adding images
// // bbObj.forEach((el, i) => (el.image = imagesBB[i]));

// // ///adding price
// // bbObj.forEach((el, i) => (el.price = bbPrice[i]));

// // ///adding size
// // bbObj.forEach((el, i) => (el.size = bbSizes[i]));
// // // console.log(bbObj);

// // ///////////---------Fragrance Obj
// // const cologne = [];

// // ///adding names
// // namesOfCologne.forEach((el, i) =>
// //   cologne.push({
// //     productName: namesOfCologne[i],
// //   })
// // );

// // // adding images
// // cologne.forEach((el, i) => (el.image = picsCologne[i]));

// // ///adding price
// // cologne.forEach((el, i) => (el.price = priceCologne[i]));

// // ///adding size
// // cologne.forEach((el, i) => (el.size = sizeOfCologne[i]));
// // // console.log(cologne);

// // const data = [...cologne, ...homeData, ...bbObj];
// // data.forEach((el) => {
// //   if (el.productName.toLocaleLowerCase().indexOf("cologne") !== -1)
// //     el.category = "cologne";
// //   if (
// //     el.productName.toLocaleLowerCase().indexOf("body") !== 1 ||
// //     el.productName.toLowerCase().indexOf("cream") !== -1 ||
// //     el.productName.toLowerCase().indexOf("bath") !== -1 ||
// //     el.productName.toLowerCase().indexOf("oil") ||
// //     el.productName.toLowerCase().indexOf("gel") !== -1 ||
// //     el.productName.toLowerCase().indexOf("lip") !== -1
// //   )
// //     el.category = "bath and body";
// //   if (
// //     el.productName.toLowerCase().indexOf("candle") ||
// //     el.productName.toLowerCase().indexOf("diffuzer") !== -1
// //   )
// //     el.category = "home essentials";
// //   if (
// //     el.productName.toLowerCase().indexOf("oud") !== -1 ||
// //     el.productName.toLowerCase().indexOf("noir") !== -1 ||
// //     el.productName.toLowerCase().indexOf("blackberry") !== -1
// //   )
// //     el.sale = "bestseller";
// // });
// // console.log(data);
