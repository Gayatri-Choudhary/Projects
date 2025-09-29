
const slid = document.querySelectorAll(".slid");
var counter = 0;

slid.forEach(
    (slid, index) => {
        slid.style.left = `${index * 100}%` ;
    }
);

const goNext = () => {
    counter = (counter + 1) % slid.length; // Loop back to the first slide
    slideImage();
}

const goPrev = () => {
    counter = (counter - 1 + slid.length) % slid.length; // Loop to the last slide if counter is negative
    slideImage();
}

const slideImage = () => {
    slid.forEach(
        (slid) => {
            slid.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}

// Automatically go to the next slide every 3 seconds
setInterval(goNext, 3000);

            var menuItems=document.getElementById("MenuItems");
            
            MenuItems.style.maxHeight="0px";
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px"){
                    MenuItems.style.maxHeight="200px";
                }
                else{
                    MenuItems.style.maxHeight="0px";
                }
            }