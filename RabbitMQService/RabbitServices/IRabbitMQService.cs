using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.RabbitMQService.RabbitServices
{
    public interface IRabbitMQService
    {
        void SendMessage<T>(T message, string queueName);

        Task SendMessageAsync<T>(T message, string queueName);

        Task<string> ReceiveMessages(string queueName);
    }
}