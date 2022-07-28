if (!window.localStorage.getItem("products")) {
  let initProducts = [
    {
      id: 0,
      name: "Tara Pantry",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 100,
      imgUrl:"https://ak1.ostkcdn.com/images/products/30884162/Tara-Pantry-23.75-W-x-15-D-x-67.75-H-13ee0613-545d-4f03-807f-0e5cd67d5da5_1000.jpg",
      category: "Kitchen",
    },
    {
      id: 1,
      name: "Blue Modern Smooth Vase",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 50,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/ba4621d99db3186b4afce18d3b529d2fbbb34986/Modern-Contemporary-Elegant-Blue-Stoneware-Smooth-Glazed-Vase-16%22H-X-5%22D-or-21%22H-X-6%22D.jpg",
      category: "Ceramics",
    },
    {
      id: 2,
      name: "Smart Led Lighted Bathroom Mirror",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 200,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/825aa766509723e15f602b9e78449c156f428a78/AQUADOM-IMAGE%2C-Rount-24%22%2CSmart-LED-Lighted-Bathroom-Mirrors-with-Built-in-TVs%2C-Defogger.jpg",
      category: "Ceramics",
    },
    {
      id: 4,
      name: "Midtown Dining Set",
      description:
        "https://i.ibb.co/b7VyRnK/Urban-Elements-Nordic-7-Piece-Dining-Set-With-Cushions.webp",
      price: 100,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/318e9b9539bb07557dc49d2586a11f7b72ae7093/Urban-Elements-Nordic-7-Piece-Dining-Set---With-Cushions.jpg",
      category: "Kitchen",
    },
    {
      id: 5,
      name: "Wood Room Divider",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 70,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/2e6b4e3022cdf9ced8cf04b1286c18bf34084baa/HOMCOM-Blinds-Style-4-Panel-Wood-Room-Divider%2C-67%27%27-Tall-Folding-Privacy-Screen-Panels-Gray.jpg",
      category: "Tables",
    },
    {
      id: 6,
      name: "Plaid Comforter Bed Set ",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 200,
      imgUrl:
        "https://secure.img1-cg.wfcdn.com/im/38232562/compr-r85/4215/42152547/normandy-plaid-coppery-tanblackbeigewhite-microfiber-reversible-modern-contemporary-comforter-set.jpg",
      category: "Chairs",
    },
    {
      id: 7,
      name: "Wood Entryway Bench",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 80,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/79c01534abd547e0adae904359b1a3c59cf24629/Craftsbury-36%22W-Wood-Entryway-Bench.jpg",
      category: "Chairs",
    },
    {
      id: 8,
      name: "Media Dresser and Desk Combo",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 100,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/fa3184f22a2cd6837ddd2334502f957f464ed34f/Novogratz-Kelly-3-in-1-Media-Dresser-and-Desk-Combo.jpg",
      category: "Chairs"
    },
    {
      id: 9,
      name: " Garden Stool",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
      price: 250,
      imgUrl:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/ead29e9220f3549fbea172d03610a64cc9d25981/SAFAVIEH-Parri-Indoor---Outdoor-Ceramic-Decorative-Garden-Stool.jpg",
      category: "Ceramics"
    },{
      id:10,
      name:'Handmade Natural Fiber Rug',
      description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat",
    price: 50,
    imgUrl:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/a2788a9ebf37123549881d7e81cbe725cd0f6201/TUHOME-Bar-Cart.jpg",
    category: "Kitchen"
    },
    {
      id:11,
      name:'Outdoor Meta Lounge Chair',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat',
      price: 70,
      imgUrl: 'https://ak1.ostkcdn.com/images/products/is/images/direct/2ac66b6781061f9a10211caf17a2e6e5a893c92d/PHI-VILLA-Outdoor-Patio-Metal-Adjustable-Relaxing-Recliner-Lounge-Chair-with-Cushion.jpg',
      category: "Chairs"
    }
  ];
    window.localStorage.setItem("products", JSON.stringify(initProducts));
  }
  let products = JSON.parse(window.localStorage.getItem("products"));


//Add a border bottom to the lists in the header
let allList = document.querySelectorAll('header nav ul a');

allList[0].classList = 'clicked';
allList.forEach((e) => {
  e.addEventListener('click', () => {
    if(e.classList === 'clicked'){
      allList.forEach((anchor) => {anchor.classList.remove('clicked')
      e.classList.add('clicked')
    })
    }
})});

  //Change the color of the header background when scrolling the page
  let header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scroll", window.scrollY > 0);
  });
  
  //Get the products and store them in the localStorage
  let container = document.querySelector(".container");
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 8);
    products.map((ele) => {
      if (ele[`id`] !== products[random][`id`]) {
        localStorage.setItem(`newProducts`, JSON.stringify(products[random]));
      }
    });
    getRandomElements(random);
  }
  
  function getRandomElements(random) {
    let card = document.createElement("div");
    card.classList = "card";
    container.appendChild(card);
  
    let overlay = document.createElement("div");
    overlay.classList = "bg";
    let anchor = document.createElement(`a`);
    anchor.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>`;
    anchor.setAttribute(`href`, `./html/products.html`);
    overlay.appendChild(anchor);
    card.appendChild(overlay);
  
    let createImg = document.createElement("img");
    createImg.src = products[random]["imgUrl"];
    createImg.setAttribute(`alt`, `products${[random]["name"]}`);
    card.appendChild(createImg);
  
    let text = document.createElement("p");
    text.textContent = products[random]["name"];
    card.appendChild(text);
  
    let price = document.createElement("span");
    price.textContent = `$${products[random]["price"]}`;
    card.appendChild(price);
  
    // Add mouseenter & mouseLeave events over the icon in the product cards
    card.addEventListener("mouseenter", () => {
      overlay.style.transform = "rotateX(0deg)";
    });
    card.addEventListener("mouseleave", () => {
      overlay.style.transform = "rotateX(90deg)";
    });
  }
  