/* custom JavaScript goes here */

//IIFe - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function
// Also a "Closure"
"use strict";

(function()
{
    function displayAbout()
    {

    }

    function displayProducts()
    {

    }

    function displayServices()
    {

    }

    function displayContact()
    {
        let sendButton = document.querySelector("button#sendButton");

        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function(event){
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });
        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            //event.preventDefault();

            console.log(fullName, value);
            console.log(contactNumber, value);
            console.log(emailAddress, value);

        });
    }
    function Start()
    {
        console.log("App Started...");

        switch(document.title)
        {
            case 'Home':
                displayHome();
            case 'About':
                displayAbout();
            case 'Products':
                displayProducts();
            case 'Services':
                displayServices();
            case 'Contact':
                displayContact();      
        }

        let paragraphOneContent = "This is my first paragraph";

        // selection

        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        let paragraphOneElements = document.getElementsByTagName("p")[0];
        console.log(paragraphOneElements);

        let paragraphQuery = document.querySelector("p");
        console.log(paragraphQuery);
        
        // STEP 1 - Create a new Element
        let paragraphTwo = document.createElement("p");
        // Step 2 - configure the new Element
        paragraphTwo.setAttitube("id", "paragraphTwo");
        paragraphTwo.textContent = "This is my record paragraph";
        paragraphTwo.className = "fs-4 fw-bold";
        // STEP 3 - Target the Parent Element
        let mainContent = document.querySelector("main");
        // STEP 4 - append the new element to the parent
        mainContent.appendChild(paragraphTwo);
        
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = `<h2>This is my second heading</h2>
        <p id="paragraphThree"> This is the Third Paragraph </p>`;

        mainContent.append(newDivTag);
        //paragraphOne.after(newDivTag);
        //paragraphOne.before(newDivTag);
        paragraphOne.insertBefore(newDivTag, paragraphOne);
        mainContent.removeAttribute();
    }

    window.addEventListener("load", Start);
})();