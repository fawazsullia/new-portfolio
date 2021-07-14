"https://fawazsullia.substack.com/p/you-dont-have-to-make-mistakes?r=a2q17&utm_campaign=post&utm_medium=web&utm_source=copy"


document.querySelector('.copy-email').addEventListener('click', ()=>{
    const text = "fawazsullia@gmail.com";
    navigator.clipboard.writeText(text);
    alert("Copied email to clipboard");
})

document.getElementById("newsletter-button").addEventListener('click',()=>{

    window.location.href = "https://fawazsullia.substack.com/p/you-dont-have-to-make-mistakes?r=a2q17&utm_campaign=post&utm_medium=web&utm_source=copy"

})

document.querySelector(".hamburger-nav").addEventListener('click', ()=>{

document.querySelector(".main-nav").classList.toggle("open-menu") })
