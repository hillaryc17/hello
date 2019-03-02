let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";
request.open("Get", url, true);

request.onload = function() {
    let data = JSON.parse(this.response);
    
    let advice = document.getElementById('advice');
    if (request.status >= 200 && request.status <400) {
        advice.innerHTML = data["slip"].advice;
    }
};

request.send();