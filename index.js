document.addEventListener("DOMContentLoaded", ()=>{
    var unread = document.querySelectorAll(".unread");
    var red_dots = document.querySelectorAll(".red-dot");
    var notification_count = document.querySelector(".notification-count");
    console.log(notification_count.innerHTML)
    for(let i=0; i<unread.length;i++){
        unread[i].addEventListener("click", ()=>{
            unread[i].classList.remove("unread");
            red_dots[i].remove();
            if (notification_count.innerHTML >0 ){
                notification_count.innerHTML -= 1;
            }
            
        })
    }
})

function markRead(){
    var unread = document.querySelectorAll(".unread");
    var red_dots = document.querySelectorAll(".red-dot");
    var notification_count = document.querySelector(".notification-count");
    console.log(notification_count.innerHTML)
    for(let i=0; i<unread.length;i++){
            unread[i].classList.remove("unread");
            red_dots[i].remove();
            if (notification_count.innerHTML >0 ){
                notification_count.innerHTML -= 1;
            }
            
    }
    
}