

const products = [
    {
        name: "Pork Loin",
        originPrice: 10.56,
        discountPrice: 8.99,
        rating: 3,
        img: require("../img/PorkLoin.jpg"),
    },
    {
        name: "Asian Baby Bulk Choy",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Asian Baby Bulk Choy.jpg"),
    },
    {
        name: "Fresh Eggs",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Fresh Eggs.jpg"),
    },
    {
        name: "Chicken Wings",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Chicken Wings.jpg"),
    },
    {
        name: "Green Grapes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Green Grapes.jpg"),
    },
    {
        name: "Fuji Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Fuji Apples.jpg"),
    },
    {
        name: "Keitt Mango",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Keiit Mango.jpg"),
    },
    {
        name: "Royal Gala Apples",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Royal Gala Apples.jpg"),
    },
    {
        name: "Tomatoes",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Tomatoes.jpg"),
    },
    {
        name: "Chicken Drumpstick",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Chicken Drumpstick.jpg"),
    },
    {
        name: "Japanese Bulk Choy",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Japanese Bulk Choy.jpg"),
    },
    {
        name: "Creamy Potato",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Creamy Potato.jpg"),
    },
    {
        name: "Washed Potatoes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Washed Potatoes.jpg"),
    },
    {
        name: "Seedless Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Seedless Grapes.jpg"),
    },
    {
        name: "Seedless Finger Grapes",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Seedless Finger Grapes.jpg"),
    },
    {
        name: "Pork Ribs",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Pork Ribs.jpg"),
    },
    {
        name: "Frozen T-bones Steak",
        originPrice: 7.88,
        discountPrice: 6.99,
        rating: 5,
        img: require("../img/Frozen T-bones Steak.jpg"),
    },
    {
        name: "Fresh Frozen Beef Steak",
        originPrice: 2.99,
        discountPrice: 2.5,
        rating: 4,
        img: require("../img/Fresh Frozen Beef Steak.jpg"),
    },
]
                           


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
            })}
    return products}
    
export default products
