let home = document.getElementById("home")
let about = document.getElementById("about")
let project = document.getElementById("projects")
let nav = document.getElementById("nav")

current = home
function change_Page(page){
    if (page == "about"){
        current.style.zIndex = 2
        about.style.zIndex = 10
        current = about
        return;
    }
    if (page == "home"){
        current.style.zIndex = 2
        home.style.zIndex = 10
        current = home
        return;
    }
    if (page == "projects"){
        current.style.zIndex = 2
        project.style.zIndex = 10
        current = project
        return;
    }
}

let b = false
function nav_drop(){
    if (b == false)
    {
        nav.style.zIndex = "19";
        b = true 
    }
    else{
        nav.style.zIndex = "0";
        b = false
    }
       
}