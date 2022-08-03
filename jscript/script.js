
    const humMenu = document.getElementById('hum_menu');
    const overlay = document.querySelector('.overlay');
    const sidenav = document.querySelector('.sidenav');
    const closebtn = document.getElementById('closebtn');
    let isCart = false;
    let overlayOpen = false;
    // removing the current from the header links
    let list = document.querySelectorAll('.nav-list li a');
    list.forEach(a => {
      a.addEventListener('click',(link =>{
        list.forEach(elem => elem.classList.remove('current'));
        link.currentTarget.classList.add('current')
      }))
      
    })

    // open and closing cart ITEM
    const cartItem = document.getElementById('cartItem');

    cartItem.addEventListener('click' , function(){
      document.querySelector('.cart').classList.toggle('show');
    })

    // closing and opening the side nav
    humMenu.addEventListener('click' ,openNav);
    closebtn.addEventListener('click' ,closeNav);
    function openNav(){
        overlay.classList.add('opensidenav');
        sidenav.classList.add('opensidenav');
    }
    function closeNav(){
      overlay.classList.remove('opensidenav');
        sidenav.classList.remove('opensidenav');
    }
    /* mobile view slides show w3schools reference */
    var slideIndex = 1;
    slideShow(slideIndex);
    function mobileSlide(n){
      slideShow(slideIndex += n)
    }
    function slideShow(n){
      let images , i;
      images = document.querySelectorAll('.img-box .img');
      if (n > images.length) {slideIndex = 1}
      if (n < 1) {slideIndex = images.length}
      for(i = 0 ; i  < images.length ; i++){
        images[i].className = images[i].className.replace(" active" , "");
      }
      images[slideIndex-1].className += " active"

    }

    /*  end mobile view slides show w3schools reference */
    
   /* */
   let incrBtns = document.querySelectorAll('.increment');
   let value = parseInt(document.getElementById('timeNum').innerText);

   incrBtns.forEach(btn => {
     btn.addEventListener('click' , function(e){
      //  let value = parseInt(document.getElementById('timeNum').innerText);
       if(e.currentTarget.classList.contains('minus')){
         value = value - 1;
         if(value < 0){
          value = 0;
        }
       }else if(e.currentTarget.classList.contains('plus')){
         value = value + 1;
       }

       if(value > 0){
        updataCartItem(value);
        
      }
       document.getElementById('timeNum').innerText = value;
       let totalPrice = document.getElementById('totalPrice');
       totalPrice.innerText = '$'+ value * 125+'00';
     })

   })
   /* updating the price value */
  //  console.log( document.getElementById('totalPrice').innerText)

  if(isCart){
    
  }
  function updataCartItem(value){
    let totalAmout = document.querySelector('span#count');
    totalAmout.style.display = 'block';
    document.querySelector('span#count i').innerText = value;
    isCart = true;
    let cartTtold = document.querySelector('#CarttotalAmount')
    cartTtold.innerText = value;
    let carttotalPrice = document.querySelector("#carttotalPrice");

    carttotalPrice.innerText = 125 * value;
    let cartBody = document.querySelector('.cart-body');
    let btn = document.querySelector(".btn.btn-check");
    cartBody.style.display = "flex";
    btn.style.display = "block";
    const emptyCard = document.querySelector('.empty-card');
    emptyCard.style.display = "none"
  }

   
   
    // changing the image on deskotp screen
    let hovers = document.querySelectorAll('.hovers');

    hovers.forEach(hover =>{
      hover.addEventListener('click' , function(e){
        let current = e.currentTarget.children[0].getAttribute('src');
        let images = document.querySelectorAll('.img-box .img img');
        // console.log(images.getAttribute('src'))
        hovers.forEach(elem =>{
          elem.children[0].classList.remove('active')
        })

        e.currentTarget.children[0].classList.add('active');

        current = (current.split('-thumbnail', 1)[0] +'.jpg' );
        images.forEach(img =>{
          if(img.getAttribute('src') === current){
            // console.log('passed')
            images.forEach(Aimg =>{
              Aimg.parentElement.classList.remove('active');
              // Aimg.classList.remove('active')
            })
            img.parentElement.classList.add('active')

          }
        })
        // console.log(e.currentTarget.children[0].attributes[0].getAttribute('src'));
        
      })
    })
    const deleteItem = document.querySelector('#deleteItem');

    deleteItem.addEventListener('click' , function(e){
      e.currentTarget.parentElement.style.display = "none";
      document.querySelector('.btn.btn-check').style.display = "none";
      document.querySelector('.empty-card').style.display = "block";
      value = 0;
      document.querySelector('span#count i').innerText = value;
      // console.log(value)
    })

    let desktopImg = document.querySelectorAll('.img-box .img');

    desktopImg.forEach((img)=>{
      img.addEventListener('click' , function(e){
          // console.log(e.currentTarget.children[0]);

          const src = e.currentTarget.children[0].getAttribute('src');
          // console.log(src)
          let globalOverlay = document.querySelector('.global-overlay');

          let output = `<div class="global-overlay-content">
          <!-- <img src="./images/icon-close.svg" alt="" srcset="" class="closebtn"> -->
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" class="closebtn"><path class = "closebtn" d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ffffff" fill-rule="evenodd"/></svg>
            <div class="previousbtn">
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
  
          <div class="global-overlay-content-img-box">
            <img src="${src}" alt="" srcset="">
          </div>
          <div class="nextbtn">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
          </div>
         
  
          <div class="global-overlay-content-thumbnails">
            <img src="./images/image-product-1-thumbnail.jpg" class="active thumbnail" id="0" alt="" srcset="">
            <img src="./images/image-product-2-thumbnail.jpg" class= "thumbnail" id="0" alt="" srcset="">
            <img src="./images/image-product-3-thumbnail.jpg" class= "thumbnail" id="0" alt="" srcset="">
            <img src="./images/image-product-4-thumbnail.jpg" class= "thumbnail" id="0" alt="" srcset="">
          </div>
      </div>`
      globalOverlay.innerHTML = output;

      globalOverlay.classList.add('active');
      overlayOpen = true;
          
      })
    })

let overlayCloseBtn = document.querySelector('.global-overlay');



// events bubbling for the global overlay
overlayCloseBtn.addEventListener('click' , function(e){
  // closing hte global overlay
  let viewimage = document.querySelector('.global-overlay-content-img-box img');

  if(e.target.classList.contains('closebtn')){
    this.classList.remove('active')
  }
  // passing the thumbanail into the show image
  let thumbnail = document.querySelectorAll(".thumbnail");
  
  if(e.target.classList.contains('thumbnail')){
    thumbnail.forEach(thumb =>{
      thumb.classList.remove('active')
    })
    let src = e.target.getAttribute('src');
    src = (src.split('-thumbnail', 1)[0] +'.jpg' );
    
    viewimage.setAttribute('src' , src)
    e.target.classList.add('active');
  }

  // next and previous button
  if(e.target.classList.contains('nextbtn')){
    const thumbnail = document.querySelectorAll(".thumbnail");
    let current = document.querySelector('.thumbnail.active');
    
    if(current.nextElementSibling){
      current.classList.remove('active');
      current.nextElementSibling.classList.add('active');
      let src = current.nextElementSibling.getAttribute('src');
      src = (src.split('-thumbnail', 1)[0] +'.jpg' );
      // let viewimage = document.querySelector('.global-overlay-content-img-box img');
      viewimage.setAttribute('src' , src);
    }else{
      current.classList.remove('active');
      thumbnail[0].classList.add('active');
      let src = thumbnail[0].getAttribute('src');
      src = (src.split('-thumbnail', 1)[0] +'.jpg' );
      viewimage.setAttribute('src' , src);

    }

  }
  if(e.target.classList.contains('previousbtn')){
    const thumbnail = document.querySelectorAll(".thumbnail");
    let current = document.querySelector('.thumbnail.active');

    if(current.previousElementSibling){
      current.classList.remove('active');
      current.previousElementSibling.classList.add('active');
      let src = current.previousElementSibling.getAttribute('src');
      src = (src.split('-thumbnail', 1)[0] +'.jpg' );
      // let viewimage = document.querySelector('.global-overlay-content-img-box img');
      viewimage.setAttribute('src' , src);
    }else{
      current.classList.remove('active');
      thumbnail[thumbnail.length - 1].classList.add('active');
      let src = thumbnail[thumbnail.length - 1].getAttribute('src');
      src = (src.split('-thumbnail', 1)[0] +'.jpg' );
      viewimage.setAttribute('src' , src);
    }
  }
})


// let styleSheet = document.querySelector("#ornamentSheet");
// styleSheet.disabled = true;
