
//------------------------------ "Return to top" button operation ------------------------------
{
    let button = document.getElementById("toTopButton");

    window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            button.style.display = "block";
        else
            button.style.display = "none";
    }

    function getToTop(){
        document.documentElement.scrollTop = 0;
    }
}