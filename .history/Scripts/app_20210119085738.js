/* custom JavaScript goes here */

//IIFe - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function
// Also a "Closure"

(function()
{

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();