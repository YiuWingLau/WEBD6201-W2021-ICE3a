/* custom JavaScript goes here */

//IIFe - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function
// Also a "Closure"

(function()
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph";

        // selection

        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;

        let paragraphOneElements = document.getElementsByTagName("p");
        console.log(paragraphOneElements);
    }

    window.addEventListener("load", Start);
})();