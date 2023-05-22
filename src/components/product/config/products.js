

const products = [
    {
        productName: "Test Pork Loin",
        originPrice: 10.56,
        discountPrice: 8.99,
        rating: 3,
        src: "images/PorkLoin.jpg",
    },
    {
        productName: "Test Asian Baby Bulk Choy",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Asian Baby Bulk Choy.jpg",
    },
    {
        productName: "Test Fresh Eggs",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Fresh Eggs.jpg",
    },
    {

        productName: "Test Chicken Wings",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Chicken Wings.jpg",
    },
    {
        productName: "Test Green Grapes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Green Grapes.jpg",
    },
    {
        productName: "Test Fuji Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Fuji Apples.jpg",
    },
    {
        productName: "Test Keitt Mango",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Keiit Mango.jpg",
    },
    {
        productName: "Test Royal Gala Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Royal Gala Apples.jpg",
    },
    {
        productName: "Test Tomatoes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Tomatoes.jpg",
    },
    {
        productName: "Test Chicken Drumpstick",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Chicken Drumpstick.jpg",
    },
    {
        productName: "Test Japanese Bulk Choy",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Japanese Bulk Choy.jpg",
    },
    {
        productName: "Test Creamy Potato",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Creamy Potato.jpg",
    },
    {
        productName: "Test Washed Potatoes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Washed Potatoes.jpg",
    },
    {
        productName: "Test Seedless Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Seedless Grapes.jpg",
    },
    {
        productName: "Test Seedless Finger Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Seedless Finger Grapes.jpg",
    },
    {
        productName: "Test Pork Ribs",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Pork Ribs.jpg",
    },
    {
        productName: "Test Frozen T-bones Steak",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        src: "images/Frozen T-bones Steak.jpg",
    },
    {
        productName: "Test Fresh Frozen Beef Steak",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        src: "images/Fresh Frozen Beef Steak.jpg",
    },
]
                           
// {
//     productName: "Test Fresh Frozen Beef Steak",
//     originPrice: 2.99,
//     discountPrice: 2.5,
//     rating: 4,
//     src: "require(images/Fresh Frozen Beef Steak.jpg"),
// }

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
                productName: files[i],
                originPrice: 2,
                discountPrice: 1.5,
                rating: 4.4,
                src: path + "/" + files[i],
            })}
    return products}
    
export {products}
