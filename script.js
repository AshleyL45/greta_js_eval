let notifications = document.querySelectorAll("section");
const markAllAsReadButton = document.querySelector("#mark-all-as-read");
const pointMarker = document.querySelectorAll(".unread-marker");
const notificationsCounter = document.querySelector("#notifications-number");
const notificationsMarker = document.querySelectorAll(".unread-marker");
let counter = null;

/* Fonction pour le point rouge*/
notifications = Array.from(notifications);

notifications.forEach((notification) => {
    const index = notifications.indexOf(notification);

    if(!notification.classList.contains("unread-notifications")){
        notificationsMarker[index].style.display = "none";
    }
})

/* Fonction pour le marquer toutes les notifications en non-lu ou lu*/
markAllAsReadButton.addEventListener('click', () => {
    if(notificationsCounter.innerText === "0"){
        notifications.forEach((notification) => {
            const index = notifications.indexOf(notification);

            notification.classList.add("unread-notifications");
            notificationsMarker[index].style.display = "inline-block";
            notificationsCounter.innerText = "7";
            markAllAsReadButton.innerText = "Mark all as read";
        })
    }

    else {
        notifications.forEach((notification) => {
            const index = notifications.indexOf(notification);

            notification.classList.remove("unread-notifications");
            notificationsMarker[index].style.display = "none";
            notificationsCounter.innerText = "0";
            markAllAsReadButton.innerText = "Mark all as unread";
        })
    }
    counter = Number(notificationsCounter.innerText);
});

/*Fonction pour mettre chaque notification en lu ou non-lu*/
notifications.forEach((notification) => {
    const index = notifications.indexOf(notification);
    counter = Number(notificationsCounter.innerText);
    
    notification.addEventListener('click', () => {

        if(notification.classList.contains("unread-notifications")){
            notification.classList.remove("unread-notifications");
            notificationsMarker[index].style.display = "none";
            counter --;
        }

        else {
            notification.classList.add("unread-notifications");
            notificationsMarker[index].style.display = "inline-block";
            counter ++;
        }

        notificationsCounter.innerText = counter;
    })
})

