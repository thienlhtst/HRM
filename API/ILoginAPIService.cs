using QLNS.ViewModel.Systems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface ILoginAPIService
    {
        public Task<LoginRequest> LoginUser(LoginModel loginModel);
    }
}
