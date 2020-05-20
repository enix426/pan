class panel {
    
    open(){
        console.log("je suis dans pan et je suis open");
        document.getElementById("hote_panel").style.display = "block";
        document.querySelector(".w3-button").style.display = "none";
    }

    close(){
        console.log("je suis dans pan et je suis close");
        document.getElementById("hote_panel").style.display = "none";
        document.querySelector(".w3-button").style.display = "block";
    }



}