function getShippingCost(country) {
   
    let message = '';
    switch (country) {
        case 'China':
           const priceChina = 100;
           message = `Shipping to ${country} will cost ${priceChina} credits`;
            break;
         case 'Chile':
            const priceChile = 250;
            message = `Shipping to ${country} will cost ${priceChile} credits`;
            break;
         case 'Australia':
            const priceAustralia = 170;
            message = `Shipping to ${country} will cost ${priceAustralia} credits`;
            break;
         case 'Jamaica':
            const priceJamaica = 120;
            message = `Shipping to ${country} will cost ${priceJamaica} credits`;
            break;
        default:
            message = 'Sorry, there is no delivery to your country';
           
    }
     return message;
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
