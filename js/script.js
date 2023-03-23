function userInput (event) {
    event.preventDefault();
    const whiteboard = document.querySelector("#whiteboard").value;
    const name = document.querySelector ("#name").value;
    const creditcard = document.querySelector ("#creditcard").value;
    const cvv = document.querySelector ("#cvv").value;
    const zipcode = document.querySelector ("#zipcode").value;
    const shipping = document.querySelector ("#shipping").value;
    receipt (whiteboard, name, creditcard, cvv, shipping, zipcode);
}

function receipt (whiteboard, name, creditcard, cvv, shipping, zipcode) {
    const boardtype = document.getElementById("boardtype");
    const price = document.getElementById("price");
    const ccnumber = document.getElementById("ccnumber");
    const shipaddress = document.getElementById("shipaddress");
    const discount = document.getElementById("discount");
    const finalprice = document.getElementById("finalprice");
    const thanks = document.getElementById("thanks")

    thanks.innerText = `Thank you, ${name}`

    ccnumber.innerText = creditcard;
    shipaddress.innerText = shipping + zipcode;
    
    if (whiteboard.value === '1') {
        boardtype.innerText = "Baby's First Whiteboard";
        price.innerText = whiteboard.dataset.cost;

    }
} 

function getPrice() {
    return 
}


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", userInput)
})