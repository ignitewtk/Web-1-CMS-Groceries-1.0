
function getProducts(path) {
    var products = []
    var files = [
        "PorkLoin.jpg",
        // "Chicken Wings.jpg",
        // "Green Grapes.jpg",
        // "Fuji Apples.jpg",
        // "Keiit Mango.jpg",
        // "Royal Gala Apples.jpg",
        // "Tomatoes.jpg",
        // "Chicken Drumpstick.jpg",
        // "Japanese Bulk Choy.jpg",
        // "Creamy Potato.jpg",
        // "Fresh Eggs.jpg",
        // "Washed Potatoes.jpg",
        // "Seedless Grapes.jpg",
        // "Seedless Finger Grapes.jpg",
        // "Pork Ribs.jpg",
        // "Asian Baby Bulk Choy.jpg",
        // "Frozen T-bones Steak.jpg",
        // "Fresh Frozen Beef Steak.jpg",
    ]
    for (var i=0; i<files.length; i++) {
        products.push(
            {
                name: files[i],
                originPrice: 2,
                discountPrice: 1.5,
                rating: 4.4,
                img: path + "/" + files[i],
            })
    }

    return products
}
const products = getProducts("../img")

export default products
