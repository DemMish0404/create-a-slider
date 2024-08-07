const sliderData = {
  "id": "bb56092a-e433-46da-9b9c-864ab90d3562",
  "name": "home",
  "slug": "home",
  "slides": [
    {
      "id": "9f838d7c-d326-4dba-abc9-60c0dc7c9bd2",
      "title": null,
      "link": "/sale",
      "link_target": null,
      "image_orientation_map": {
        "desktop": {
          "id": "f778ec2a-d6d2-44b2-ad2d-2425fd6c276a",
          "path": "sliders/home/ZaXjODEspKL0L7cvPxodOUZ3FXwtSkF3BXKLEA2f.png",
          "mime_type": "image/png",
          "width": 6001,
          "height": 2647,
          "thumbnails": [
            {
              "id": "2ec428d7-7b57-47a1-bf99-2585d550b253",
              "class": "thumbnail_horizontal",
              "path": "sliders/home/ps4slim.webp",
              "path2x": null,
              "width": 267,
              "height": 150
            },
            
          ]
        },
        "mobile": {
          "id": "d9cb0d67-1067-4a82-be66-100183b37e54",
          "path": "sliders/home/xL0IJqstk6MDWLW79ekdXMTx646LxaK1pQKEYrES.png",
          "mime_type": "image/png",
          "width": 576,
          "height": 870,
          "thumbnails": [
            {
              "id": "5f11fe10-8910-483f-a3a6-19f423398ca6",
              "class": "thumbnail_vertical",
              "path": "sliders/home/ps4slimMonile.webp",
              "path2x": null,
              "width": 150,
              "height": 267
            }
          ]
        },
        "tablet": null
      }
    },
    {
      "id": "57be82c2-5478-4a0f-b588-2d92d9fb6215",
      "title": null,
      "link": "/sale",
      "link_target": null,
      "image_orientation_map": {
        "desktop": {
          "id": "ec2fb172-5a9e-4f20-bc5c-1a0776863640",
          "path": "sliders/home/CM31S4yrLhSVPFxGKCg9m1aKacjfEz29489RJLfe.jpg",
          "mime_type": "image/jpeg",
          "width": 1440,
          "height": 640,
          "thumbnails": [
            {
              "id": "7a1db3f7-9e22-4c5f-b2d1-9b2301a6b1e0",
              "class": "slide_desktop",
              "path": "sliders/home/ps3.webp",
              "path2x": null,
              "width": 1440,
              "height": 640
            },
            {
              "id": "b032bd2b-2a33-45ff-b96e-c868ddbe5a85",
              "class": "thumbnail_horizontal",
              "path": null,
              "path2x": null,
              "width": 267,
              "height": 150
            }
          ]
        },
        "mobile": {
          "id": "d9cb0d67-1067-4a82-be66-100183b37e77",
          "path": "sliders/home/xL0IJqstk6MDWLW79ekdXMTx646LxaK1pQK888ES.png",
          "mime_type": "image/png",
          "width": 576,
          "height": 870,
          "thumbnails": [
            {
              "id": "5f11fe10-8910-483f-a3a6-19f423398ca6",
              "class": "thumbnail_vertical",
              "path": "sliders/home/ps3Mobile.webp",
              "path2x": null,
              "width": 150,
              "height": 267
            }
          ]
        },
        "tablet": null,
      }
    }
  ]
}

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
 });


function displaySlides(sliderData){
   const viewportWidth = window.innerWidth // получаем ширину окна браузера у пользователя
   const parentContainer = document.getElementById('first-swiper-slider-container')
   const slideTemplate = document.getElementById('slider-card-template')
   
   if(viewportWidth > 576){ // если пк разрешение экрана
      sliderData.slides.forEach((elem,index)=>{
         const clone = createClone(slideTemplate,elem, false)
         parentContainer.appendChild(clone);
      })
   }else{ 
      // если мобильное разрешение экрана
      sliderData.slides.forEach((elem,index)=>{
         const clone = createClone(slideTemplate,elem, true) // получаем готового клона
         parentContainer.appendChild(clone);
      })
   }
   

}

// функция по созданию клона
function createClone( template, slideInfo,isItMobile = false){
   const clone = document.importNode(template.content, true); // создаем клон с образца
   if(isItMobile === true){
      
      clone.querySelector('.slide-card__img').src = slideInfo.image_orientation_map.mobile?.thumbnails[0]?.path
      clone.querySelector('.slide-card__img').alt = 'альтернативный текст для картинки'
      clone.querySelector('.slide-card__title').textContent = 'заголовок для слайда'
      clone.querySelector('.slide-card__text').textContent = 'текст для слайда'
      return clone
   } else{ 

      clone.querySelector('.slide-card__img').src = slideInfo.image_orientation_map.desktop?.thumbnails[0]?.path
      clone.querySelector('.slide-card__img').alt = 'альтернативный текст для картинки если у товара нет картинки'
      clone.querySelector('.slide-card__title').textContent = 'заголовок для слайда'
      clone.querySelector('.slide-card__text').textContent = 'текст для слайда'
      return clone
   }

   
}

// функция по отображению слайдов на странице
displaySlides(sliderData)