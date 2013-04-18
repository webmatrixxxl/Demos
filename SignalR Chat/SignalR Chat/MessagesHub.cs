using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;


namespace SignalR_Chat
{
    [HubName("MessagesHub")]
    public class MessagesHub : Hub
    {
        public void SendMessages(string message, string color)
        {
            //Call displayMessages on client
            Clients.All.displayMessages(message, color);
        }
    }
}