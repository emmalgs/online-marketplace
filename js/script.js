function userInput (event) {
    event.preventDefault();
    const whiteboard = document.querySelector("#whiteboard").value;
    const name = document.querySelector ("#name").value;
    const creditcard = document.querySelector ("#creditcard").value;
    const cvv = document.querySelector ("#cvv").value;
    const zipcode = document.querySelector ("#zipcode").value;
    const shipping = document.querySelector ("#shipping").value;
    document.getElementById("receipt").removeAttribute("class");
    receipt (whiteboard, name, creditcard, cvv, shipping, zipcode);
}

function receipt (whiteboard, name, creditcard, cvv, shipping, zipcode) {
    const boardtype = document.getElementById("boardtype");
    const price = document.getElementById("price");
    const ccnumber = document.getElementById("ccnumber");
    const shipaddress = document.getElementById("shipaddress");
    const discount = document.getElementById("discount");
    const finalprice = document.getElementById("finalprice");
    const thanks = document.getElementById("thanks");
    const wb1 = parseFloat(document.getElementById("wb1").dataset.cost);
    const wb2 = parseFloat(document.getElementById("wb2").dataset.cost);
    const wb3 = parseFloat(document.getElementById("wb3").dataset.cost);
    const wb4 = parseFloat(document.getElementById("wb4").dataset.cost);

    thanks.innerText = `Thank you, ${name}`;

    ccnumber.innerText = creditcard;
    shipaddress.innerText = shipping + zipcode;
    
    if (whiteboard === '1') {
        boardtype.innerText = "Baby's First Whiteboard";
        price.innerText = `$ ${wb1}`;
        discount.innerText = "60%"
        finalprice.innerText = `$ ${discounted(wb1)}`;
    } else if (whiteboard=== '2') {
        boardtype.innerText = "Rainbow Board";
        price.innerText = `$ ${wb2}`;
        discount.innerText = "60%"
        finalprice.innerText = `$ ${discounted(wb2)}`;
    } else if (whiteboard=== "3") {
        boardtype.innerText = "Big Boy Board";
        price.innerText = `$ ${wb3}`;
        discount.innerText = "60%"
        finalprice.innerText = `$ ${discounted(wb3)}`;
    } else if (whiteboard === '4') {
        boardtype.innerText = "Cadillac Board";
        price.innerText = `$ ${wb4}`;
        discount.innerText = "60%"
        finalprice.innerText = `$ ${discounted(wb4)}`;
    }
} 

function discounted(cost) {
    return (cost * .4).toFixed(2)
}


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", userInput)
})