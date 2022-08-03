var starIndex = 1;
showCurrent(starIndex);

function showSlides(n){
    showCurrent(starIndex = n)
}

function showCurrent(n){
    var i , dots , images;
    console.log(starIndex)
    dots = document.getElementsByClassName("hovers");
    images = document.getElementsByClassName("img");
    if(n > dots.length){starIndex = 1}
    if(n < 1){starIndex = dots.length}

    for(i = 0 ; i < images.length ; i++ ){
        images[i].style.display = "none";
    }
    for(i = 0 ; i < dots.length ; i++){
        dots[i].className = dots[i].className.replace(" active" , "");
    }

    images[starIndex -1].style.display = "block";
    dots[starIndex - 1].className += " active"
    
}
//  selecting the images with the src abbributes

// let hovers = document.querySelectorAll('.hovers');
//     hovers.forEach(hover =>{
//       hover.addEventListener('click' , function(e){
//         let current = e.currentTarget.children[0].getAttribute('src');
//         let images = document.querySelectorAll('.img-box .img img');
//         // console.log(images.getAttribute('src'))

        
//         current = (current.split('-thumbnail', 1)[0] +'.jpg' );
//         images.forEach(img =>{
//           if(img.getAttribute('src') === current){
//             console.log('passed')
//             images.forEach(Aimg =>{
//               Aimg.parentElement.classList.remove('active');
//             })
//             img.parentElement.classList.add('active')
//           }
//         })


//         // console.log(e.currentTarget.children[0].attributes[0].getAttribute('src'));
        
//       })
//     })