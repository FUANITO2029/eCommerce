const productData = [
  {
    index: '01',
    name: 'yellow tracksuit',
    image: "img1.jpg",
    des: 'Deslumbra tu asombro estilo con el Chandal amarillo'
  },
  {
    index: '02',
    name: 'einer outfit',
    image: "img2.jpg",
    des: 'Porque vestir con ropa ajustada quedo atras, ahora viste ropa comoda cn tu traje de einer'
  },
  {
    index: '03',
    name: 'chilling mood',
    image: "img3.jpg",
    des: 'Acompaña a tu estado de animo escalofriante con rota acorde a tu modo'
  },
  {
    index: '04',
    name: 'street walking',
    image: "img4.jpg",
    des: 'Luce un estilo casual caminando por las callesd de New York.'
  },
  {
    index: '05',
    name: 'jacket suit',
    image: "img5.jpg",
    des: 'Viste a la moda con conjunto ideal para la nueva temponara de invierno.'
  },
  {
    index: '06',
    name: 'cool jeans',
    image: "img6.jpg",
    des: 'Sigue con tus mejores prendas a tu figura con el mejor pantalon de la temporada.'
  },
  {
    index: '07',
    name: 'special coat',
    image: "img7.jpg",
    des: 'Haz casual tu estilo formal con el traje ideal para ti.'
  },
  {
    index: '08',
    name: 'blue suit',
    image: "img8.jpg",
    des: 'Viste como el hombre más elegante con nuestra traje azul.'
  },
  {
    index: '09',
    name: 'aesthetic man',
    image: "img9.jpg",
    des: 'El estilo que gana pupilaridad simpre es lo mejor con nuestra secsion aesthetic'
  },
  {
    index: '10',
    name: 'dress with stripes',
    image: "img10.jpg",
    des: 'Luce increible y asombra al mundo con el vestido ideal para ti.'
  },
]

const ntxBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

console.log(smImgContainer)
ntxBtn.addEventListener('click', () => {
  if(currentProduct >= productData.length -1){
    currentProduct = 0
  }else{
    currentProduct++
  }
  productIndex.innerHTML = productData[currentProduct].index
  smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)

  smImgContainer.classList.add('slide')
  productImgContainer.classList.add('slide')
  backdropImg.classList.add('fade')
  productDetail.classList.add('fade')

  setTimeout(() => {
    //Ejecuta después de 500ms, cambia texto
    productName.innerHTML = productData[currentProduct].name
    productDes.innerHTML = productData[currentProduct].des
    smImg.src = productImg.src = backdropImg.src = 
    `
      img/${productData[currentProduct].image}
    `
  }, 500)

  setTimeout(() => {
    smImgContainer.classList.remove('slide')
    productImgContainer.classList.remove('slide')
    backdropImg.classList.remove('fade')
    productDetail.classList.remove('fade')
  }, 1000)
})
