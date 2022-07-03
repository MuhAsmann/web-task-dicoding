var result = prompt("Masukan Nama anda ? ")
document.getElementById("namaUser").innerText= result;


const navbar = document.querySelector("ul");
const navList = navbar.querySelectorAll("li");

// for(let i=0;i<navList.length;i++){
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function(){
//         for(let j=0;j<navList.length;j++){
//             navList[j].querySelector("a").classList.toggle("active");
//         }
//     } )
// }

for(let i=0;i<navList.length;i++){
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    //remove kelas active disemua tag a
    for (let j = 0; j < navList.length; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
   //tambahkan kelas active pada kelas yang diklik
    this.classList.add("active");
  });

}


const li = document.querySelectorAll("ul li a");
const sec = document.querySelectorAll("section");

function activeMenu(){
  let len=sec.length;
  console.log(len)

  // check the current height by using scrollY
  //check the current page height -> offsetTop
  while(--len && window.scrollY + 50 < sec[len].offsetTop){}
  // while (len >= 0 && window.scrollY + 50 < sec[len].offsetTop) {
  //   len--
  // }

  //loop through the section and adding active class
  li.forEach((list) => list.classList.remove("active"));
  li[len].classList.add("active")
}
activeMenu();
window.addEventListener("scroll", activeMenu);