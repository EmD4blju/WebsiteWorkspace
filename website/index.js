
// "Return to top" button operation
{
    let button = document.getElementById("toTopButton");

    window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            button.style.display = "block";
        }
        else{
            button.style.display = "none";
        }
    }

    function getToTop(){
        document.documentElement.scrollTop = 0;
    }
}
// Night-mode switch
{   
    function toggleModeSwitch(){
        if(document.body.style.backgroundColor == "antiquewhite"){
            document.body.style.backgroundColor = "#24252A";
            document.body.style.color = "antiquewhite";
            document.body.style.transition = "0.2s ease";
            
        }else{
            document.body.style.backgroundColor = "antiquewhite";
            document.body.style.color = "gray";
            document.body.style.transition = "0.2s ease";
        }
    }
}