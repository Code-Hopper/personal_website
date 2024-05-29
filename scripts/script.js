AOS.init({
    duration: 1000
})

const rotateTextFunction = () => {
    const text = document.querySelector('#hero-rotate-text');
    if (text) {
        const originalText = text.innerText;
        text.innerHTML = ''; // Clear the original content
        originalText.split("").forEach((char, i) => {
            const span = document.createElement('span');
            span.style.transform = `rotate(${i * 6.7}deg)`;
            span.innerText = char;
            text.appendChild(span);
        });
    }
};

rotateTextFunction();

// create and append new span as new child in original HTML document

// counting number animation about numbers grid

let aboutNumbersGridChilds = $(".about-grid-child .about-number")


// console.log(aboutNumbersGridChilds)




let start = 0

let maxEnd = 0

let time = 1000


for (let child of aboutNumbersGridChilds) {

    let end = Number(child.dataset.number)

    if(maxEnd < end){
        maxEnd = end 
    }

}

let adjustedTime = Math.round(maxEnd/time)

// relative time
// in relation to the max value


for(let child of aboutNumbersGridChilds){
    startCounter(child,Number(child.dataset.number))
}

function startCounter(target,end) {

    let count = 0

    console.log(end)

    let countInterval = setInterval(() => {

        if (count <= end) {

            target.innerHTML = `${count}+`

            // console.log(target)

            count++

        } else {
            clearInterval(countInterval)
        }

    }, adjustedTime)
}

// startCounter()