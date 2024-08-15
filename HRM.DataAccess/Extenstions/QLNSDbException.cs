using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess.Extenstions
{
	public class HRMDbException : Exception
	{  public HRMDbException()
		{
		}

		public HRMDbException(string message)
			: base(message)
		{
		}

		public HRMDbException(string message, Exception inner)
			: base(message, inner)
		{
		}
	}
}

