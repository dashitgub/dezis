document.addEventListener("DOMContentLoaded", function() {
    var socket = new WebSocket('ws://' + window.location.host + '/ws/chat/');

    socket.onopen = function(e) {
        console.log("WebSocket connection established");
    };

    socket.onmessage = function(e) {
        console.log("Message received from server: ", e.data);
    };

    socket.onclose = function(e) {
        console.log("WebSocket connection closed");
    };

    // Пример отправки сообщения
    document.querySelector("#send").onclick = function() {
        var message = document.querySelector("#messageInput").value;
        socket.send(message);
    };
});
