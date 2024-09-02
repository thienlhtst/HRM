using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime;
using System.Text;
using System.Threading.Tasks;

namespace HRM.RabbitMQService.RabbitServices
{
    public class RabbitMQSettings
    {
        public string HostName { get; set; }
    }

    public class RabbitMQService : IRabbitMQService
    {
        private readonly RabbitMQSettings _settings;
        private readonly IConnection _connection;
        private readonly IModel _channel;

        public RabbitMQService(IOptions<RabbitMQSettings> options)
        {
            _settings = options.Value;

            var factory = new ConnectionFactory() { HostName ="localhost" };
            _connection = factory.CreateConnection();
            _channel = _connection.CreateModel();
        }

        public async Task<string> ReceiveMessages(string queueName)
        {
            var tcs = new TaskCompletionSource<string>();
            _channel.QueueDeclare(queue: queueName,
                            durable: false,
                            exclusive: false,
                            autoDelete: false,
                            arguments: null);

            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);
                Console.WriteLine(" [x] Received from {0}: {1}", queueName, message);
                tcs.TrySetResult(message);
            };
            _channel.BasicConsume(queue: queueName,
                                 autoAck: true,
                                 consumer: consumer);
            return await tcs.Task;
        }

        public void SendMessage<T>(T message, string queueName)
        {
            var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));
            _channel.QueueDeclare(queue: queueName,
                                 durable: false,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);
            _channel.BasicPublish(exchange: "",
                                 routingKey: queueName,
                                 basicProperties: null,
                                 body: body);
        }

        public async Task SendMessageAsync<T>(T message, string queueName)
        {
            _channel.QueueDeclare(queue: queueName,
                             durable: false,
                             exclusive: false,
                             autoDelete: false,
                             arguments: null);

            var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));

            await Task.Run(() => _channel.BasicPublish(exchange: "",
                                                      routingKey: queueName,
                                                      basicProperties: null,
                                                      body: body));

            Console.WriteLine($"Gửi tin nhắn đến {queueName}: {message}");
        }
    }
}