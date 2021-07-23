console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successfully. Thank You!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit) 

// .lionPic.addEventListener('mouseover', function(event){
// 	alert ("Thank You")
// })

