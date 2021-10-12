let today = new Date(),
    hourNow = today.getHours(),
    greeting;

    if(hourNow > 18) {
        greeting = 'Good Evening! I am';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon! I am';
    } else if (hourNow > 0) {
        greeting = 'Good Morning! I am';
    } else {
        greeting = 'Hello my friend! I am';
    }
document.write('<h3 class="add-greeting">' + greeting + '</h3>');
