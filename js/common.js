document.addEventListener('DOMContentLoaded', function() {

	let list = document.querySelectorAll('.navigation li');
   let listLink = document.querySelectorAll('.navigation li a');
   listLink.forEach(link => {
      link.addEventListener('click', (e) => {
         e.preventDefault()
      })
   })

   function activeLink () {
      list.forEach(item => {
         item.classList.remove('active');
         this.classList.add('active');
      })
   }
   list.forEach(item => {
      item.addEventListener('click', activeLink)
   })

})
