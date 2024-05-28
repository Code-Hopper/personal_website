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