const left = document.querySelector(".arrows--left");
const right = document.querySelector(".arrows--right");
const images = document.getElementsByClassName("slide");



left.addEventListener("click", () => {
	const car = document.querySelector(".car");
	for (let i=0; i<images.length; i++) {
		if (images[i].classList.contains("activ")) {
			images[i-1].classList.remove("left");
			images[i].classList.remove("activ"); 
			images[i+1].classList.remove("right");
			images[i].classList.add("right"); 
			images[i-1].classList.add("activ"); 
			images[i-2].classList.add("left");

			
			car.prepend(images[images.length-1]);

			break;
		} 

	}
})

right.addEventListener("click", () => {
	
	for (let i=0; i<images.length; i++) {
		const car = document.querySelector(".car");
		if (images[i].classList.contains("activ")) {
			images[i-1].classList.remove("left");
			images[i].classList.remove("activ"); 
			images[i+1].classList.remove("right");
			images[i].classList.add("left"); 
			images[i+1].classList.add("activ"); 
			images[i+2].classList.add("right");

				if (images[i-2] != undefined) { 
					car.appendChild(images[i-2]);
				}

			break;
		} 
	}
})



