const layerImage = {
 1:'https://freight.cargo.site/t/original/i/96e7c0324af0cc4501974e942e3cd33c9014370bb4e7362e9d6a87074ef83965/Sample-Step-2990.jpg',
 2:'https://freight.cargo.site/t/original/i/4b173a8e2f0782ef0542e1e0fdd49449214febe786c1de0256708ac84f977da7/Sample-Step-1420.jpg',
 3:'https://freight.cargo.site/t/original/i/fa00dff51e96071d2ad40547ad6fce7edd176da7c9c16b68875a0639cdb4e512/Sample-Step-1310.jpg',
 4:'https://freight.cargo.site/t/original/i/6228269e457f95cc5bcf1806c71058f0facba9ed7aeea51a853ba568eb7d4e3e/Sample-Step-1140.jpg',
 5:'https://freight.cargo.site/t/original/i/0b27cbd42bb27017870bb03155946beec677c714cfe1906a8316f2f5f4a6af27/Sample-Step-1080.jpg',
 6:'https://freight.cargo.site/t/original/i/b808012864ad2c669b37e7aa6054d16f90fdca250a2060566a18b8eed3626d9d/Sample-Step-990.jpg',

}


function checkScroll() {
  const y = window.scrollY;
  const scrollPixels = Math.min(Math.floor(y/100) + 1, 12);
  const imageToUse = layerImage[scrollPixels];
  // Change the background image
  $('.imageBox').css('background-image', `url('${imageToUse}')`);
}
$(document).ready(()=>{
  $(window).scroll(()=>{
    checkScroll();
  })
})