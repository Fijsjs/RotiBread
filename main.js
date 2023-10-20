



const navbar = document.getElementById('navigasi')
navbar.addEventListener('click', function(){
  slide();
  refresh();
})


const dropdown = document.getElementById('drop')

const dropClick = document.getElementById('dropContent')
dropClick.addEventListener('click', dropFunction)







/*
const navigation = document.getElementById('navigation')

navigation.addEventListener('click', function() {
  slide();
  refresh();
});
*/


function refresh(){
  if (document.getElementById('drop').classList.contains('dropDown')){
    dropdown.classList.remove('dropDown')
  }
}


function slide() {
  const slideItem = document.getElementById('sTipSlide')
  slideItem.classList.toggle('geser')
}

function dropFunction() {
  dropdown.classList.toggle('dropDown')
}






const button1 = document.getElementById('btn1')



const pic4 = document.getElementsByClassName('pic')[0];

button1.addEventListener('click', muncul)



const bio = document.getElementById('biodata')
const fotoku = document.getElementsByClassName('pic')[0];


function muncul(){
  const hitung = document.getElementById('count').innerText ++ ;
  if (document.getElementById('count').innerText === '3') {
    const countElement = document.getElementById('count');
    const currentCount = parseInt(countElement.innerText);
    const newCount = currentCount - 2;
    countElement.innerText = newCount.toString();
  }
  
  
  
  if (document.getElementById('count').innerText=='1'){
    pic4.style.opacity = '1'
    bio.style.opacity = '1'
    bio.style.transform =' translateX(0%)'
    fotoku.style.transform =' translateX(0%)'
  }
  
  if (document.getElementById('count').innerText == '2') {
    pic4.style.opacity = '0'
    bio.style.opacity = '0'
    bio.style.transform = ' translateX(10%)'
    fotoku.style.transform = ' translateX(-15%)'
  }
  
  

  

  
  
}




