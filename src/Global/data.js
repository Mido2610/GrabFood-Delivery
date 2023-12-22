export const filterData = [
    { name: "Chicken", image: require('../assets/fastfood.jpg'), id: "0" },
    { name: "Food", image: require("../assets/pho.jpg"), id: "1" },
    { name: "Ăn chay", image: require("../assets/anchay.jpg"), id: "2" },
    { name: "Trà sữa", image: require("../assets/trasua.jpg"), id: "3" },
    { name: "Ăn vặt", image: require("../assets/anvat.jpg"), id: "4" },
    { name: "Hải Sản", image: require("../assets/seafood.jpg"), id: "5" },
  ];

  export const filterData2 = [
    { name: "Chicken", image: require('../assets/fastfood.jpg'), id: "0" },
    { name: "Food", image: require("../assets/pho.jpg"), id: "1" },
    { name: "Ăn chay", image: require("../assets/anchay.jpg"), id: "2" },
    { name: "Trà sữa", image: require("../assets/trasua.jpg"), id: "3" },
    { name: "Ăn vặt", image: require("../assets/anvat.jpg"), id: "4" },
    { name: "Hải Sản", image: require("../assets/seafood.jpg"), id: "5" },
  ];
  
  export const restaurantsData = [
    {
      restaurantName: "Phở Nhân Tâm",
      farAway: "21.2",
      businessAddress: "Biên Hòa",
      images: 'https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg',
      averageReview: 4.9,
      numberOfReview: 272,
      coordinates: { lat: -26.1888612, lng: 28.246325 },
      discount: 10,
      deliveryTime: 15,
      collectTime: 5,
      foodType: "Burgers, Wraps, Milkshakes...",
      productData: [
        { name: "Hand cut chips", price: 29.30, image: "https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg", id: 0 },
        { name: "Big Mac", price: 50.80, image: "https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg", id: 1 },
        { name: "Chicken Burger", price: 70, image: "https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg", id: 2 },
      ],
      id: 0,
    },
    {
      restaurantName: "KFC",
      farAway: "12.7",
      businessAddress: "Biên Hòa",
      images: 'https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg',
      averageReview: 4.3,
      numberOfReview: 306,
      coordinates: { lat: -26.1891648, lng: 28.2441808 },
      discount: 20,
      deliveryTime: 30,
      collectTime: 10,
      foodType: "Chicken, chicken wings...",
      productData: [
        { name: "Hand cut chips", price: 29.30, image: "https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg", id: 3 },
        { name: "Big Mac", price: 50.80, image: "https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg", id: 4 },
        { name: "Chicken Burger", price: 70, image: "https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg", id: 5 },
      ],
      id: 1,
    },
  ];
  

  export const productData = [{name:"Hand cut chips", price:29.30,image:"",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
                {name:"Big Mac", price:50.80,image:"https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg",
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:1},
                {name:"Chicken Burger", price:70,image:"https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg",details:"",id:2},
                
                {name:"Hand cut chips", price:29.30,image:"https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg",
                details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
                {name:"Big Mac", price:70.20,image:"https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg",
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
                {name:"Chicken Burger", price:70,image:"https://dulichvn.org.vn/nhaptin/uploads/images/phohanoiduoccangoilamonngon.jpg",details:"",id:5},
              
                  ];   
                  export const menuData = [
    
                    {title:"BEEF",special:false,key:0, },
                    {title:"CHICKEN", special:false,key:1},
                    {title:"VEGGIE BURGER",special:false ,key:2},
                    {title:"FRIES& CORN",special:false ,key:3},
                    {title:"SALADS",special:false,key:4},
                    {title:"HAPPY MEALS",special:false,key:5},
                    {title:"SAHRE BOX",special:false,key:6},
                    {title:"MILKSHAKES",special:false,key:7},
                    {title:"COLD DRINKS",special:false,key:8},
                    {title:"DESSERTS",special:false,key:9},
                    {title:"HOT DRINKS",special:false,key:10},
                  
                    ] ;
                    export const specialData =[
                      {title:"LIMITED OFFER",key:0},
                      {title:"GO CHILLI",key:1},
                      {title:"GO CHEESE",key:2},
                      {title:"MCCHICKEN DELUXE PROMO",key:3},
                    ];    