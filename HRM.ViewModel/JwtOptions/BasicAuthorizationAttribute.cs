using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.JwtOptions
{
    public class BasicAuthorizationAttribute : TypeFilterAttribute
    {
        public BasicAuthorizationAttribute() : base(typeof(BasicAuthFilter))
        {
        }
    }

    public class BasicAuthFilter : IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var request = context.HttpContext.Request;
            var authHeader = request.Headers["Authorization"].ToString();
            if (AuthenticationHeaderValue.TryParse(authHeader, out var headerValue))
            {
                // Đây là header 'Basic', có dạng 'Basic [credentials]'
                if (headerValue.Scheme.Equals("Basic", StringComparison.OrdinalIgnoreCase))
                {
                    var bytes = Convert.FromBase64String(headerValue.Parameter);
                    string[] credentials = Encoding.UTF8.GetString(bytes).Split(':');
                    string username = credentials[0];
                    string password = credentials[1];

                    // Thực hiện kiểm tra thông tin đăng nhập (ví dụ, so sánh với cơ sở dữ liệu)
                    if (IsAuthorizedUser(username, password))
                    {
                        // Nếu thông tin đăng nhập hợp lệ, cho phép yêu cầu đi tiếp
                        return;
                    }
                }
            }

            // Nếu không xác thực được, đặt kết quả trạng thái là Unauthorized
            context.Result = new UnauthorizedResult();
        }

        private bool IsAuthorizedUser(string username, string password)
        {
            // Định nghĩa logic kiểm tra thông tin đăng nhập của bạn ở đây
            // Ví dụ: Kiểm tra cơ sở dữ liệu hoặc một dịch vụ xác thực
            return (username == "expectedUsername" && password == "expectedPassword");
        }
    }
}