
export function createDom(element, idValue) {
    //Create the element using the createElement method.
    var myDiv = document.createElement("div");

    //Set its unique ID.
    myDiv.id = idValue;

    //Add your content to the DIV
    myDiv.innerHTML = element;

    //Finally, append the element to the HTML body
    document.body.appendChild(myDiv);
}

