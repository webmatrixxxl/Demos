/// <reference path="Scripts/jquery-1.6.4.js" />
/// <reference path="Scripts/jquery.signalR-1.0.1.js" />
$(function () {
    var chat = $.connection.MessagesHub;

    var randColor1 = Math.floor((Math.random() * 150) + 100),
        randColor2 = Math.floor((Math.random() * 150) + 100),
        randColor3 = Math.floor((Math.random() * 150) + 100)

    var color = "rgb(" + randColor1 + "," + randColor2 + "," + randColor3 + ")";
    console.log(color);

    chat.client.displayMessages = function (message, color) {
        $("#messagesList").prepend("<li style=background-color:" + color + ">" + message + "</li>");
    }

    $.connection.hub.start().done(function () {
        //On Send button click calls SendMessages() from MessagesHub.cs
        $("#send").click(function () {
            chat.server.sendMessages($("#message").val(), color);
        })
    })
});