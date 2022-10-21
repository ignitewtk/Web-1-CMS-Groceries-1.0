
const productNames = [
    {
        name: "Pork Loin",
        originPrice: 10.56,
        discountPrice: 8.99,
        rating: 3,
        category1: 'Meat',
        category2: 'Pork',
        img: require("../../public/images/products/PorkLoin.jpg"),
    },
    {
        name: "Asian Baby Bulk Choy",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Veges',
        category2: 'Green',
        img: require("../../public/images/products/Asian Baby Bulk Choy.jpg"),
    },
    {
        name: "Fresh Eggs",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Dairy',
        category2: 'Egg',
        img: require("../../public/images/products/Fresh Eggs.jpg"),
    },
    {
        name: "Chicken Wings",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Meat',
        category2: 'Chicken',
        img: require("../../public/images/products/Chicken Wings.jpg"),
    },
    {
        name: "Green Grapes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Fruit',
        category2: 'Grape',
        img: require("../../public/images/products/Green Grapes.jpg"),
    },
    {
        name: "Fuji Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Apple',
        img: require("../../public/images/products/Fuji Apples.jpg"),
    },
    {
        name: "Keitt Mango",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Fruit',
        category2: 'Mango',
        img: require("../../public/images/products/Keiit Mango.jpg"),
    },
    {
        name: "Royal Gala Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Apple',
        img: require("../../public/images/products/Royal Gala Apples.jpg"),
    },
    {
        name: "Tomatoes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Veges',
        category2: 'Tomato',
        img: require("../../public/images/products/Tomatoes.jpg"),
    },
    {
        name: "Chicken Drumpstick",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Meat',
        category2: 'Chicken',
        img: require("../../public/images/products/Chicken Drumpstick.jpg"),
    },
    {
        name: "Japanese Bulk Choy",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Veges',
        category2: 'Green',
        img: require("../../public/images/products/Japanese Bulk Choy.jpg"),
    },
    {
        name: "Creamy Potato",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Veges',
        category2: 'Potato',
        img: require("../../public/images/products/Creamy Potato.jpg"),
    },
    {
        name: "Washed Potatoes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Veges',
        category2: 'Potato',
        img: require("../../public/images/products/Washed Potatoes.jpg"),
    },
    {
        name: "Seedless Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Grape',
        img: require("../../public/images/products/Seedless Grapes.jpg"),
    },
    {
        name: "Seedless Finger Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Fruit',
        category2: 'Grape',
        img: require("../../public/images/products/Seedless Finger Grapes.jpg"),
    },
    {
        name: "Pork Ribs",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Meat',
        category2: 'Pork',
        img: require("../../public/images/products/Pork Ribs.jpg"),
    },
    {
        name: "Frozen T-bones Steak",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        category1: 'Meat',
        category2: 'Steak',
        img: require("../../public/images/products/Frozen T-bones Steak.jpg"),
    },
    {
        name: "Fresh Frozen Beef Steak",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        category1: 'Meat',
        category2: 'Steak',
        img: require("../../public/images/products/Fresh Frozen Beef Steak.jpg"),
    },
]


function getProducts(productNames) {
    var products = []
    for (var i=0; i<productNames.length; i++) {
        products.push(
            {
                name: productNames[i],
                originPrice: 2,
                discountPrice: 1.5,
                rating: 4.4,
            })
    }

    return products
}
const products = getProducts(productNames)

module.exports = productNames;


// const productNames = [
//     [
//         "Pork Loin.jpg",
//         "Chicken Wings.jpg",
//         "Green Grapes.jpg",
//         "Fuji Apples.jpg",
//         "Keiit Mango.jpg",
//         "Royal Gala Apples.jpg",
//         "Tomatoes.jpg",
//         "Chicken Drumpstick.jpg",
//         "Japanese Bulk Choy.jpg",
//         "Creamy Potato.jpg",
//         "Fresh Eggs.jpg",
//         "Washed Potatoes.jpg",
//         "Seedless Grapes.jpg",
//         "Seedless Finger Grapes.jpg",
//         "Pork Ribs.jpg",
//         "Asian Baby Bulk Choy.jpg",
//         "Frozen T-bones Steak.jpg",
//         "Fresh Frozen Beef Steak.jpg",
//     ]
// ]