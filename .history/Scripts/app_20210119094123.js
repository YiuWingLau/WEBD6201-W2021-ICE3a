/* custom JavaScript goes here */

//IIFe - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function
// Also a "Closure"

(function()
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = "This is my first paragraph";
    }

    window.addEventListener("load", Start);
})();