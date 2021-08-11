
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

export function createImage(url) {
    var myImage = document.createElement("div");
    myImage.innerHTML = `<img src="${url}" alt="Image is not available">`
    document.body.appendChild(myImage);
}

export const acar = {
    wordnik: "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
    giphy: "gULhDRsT8EXi5iku09zG7ndGOC61jQfH"
}