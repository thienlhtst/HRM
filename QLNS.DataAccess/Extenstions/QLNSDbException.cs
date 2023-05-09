using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Extenstions
{
	public class QLNSDbException : Exception
	{  public QLNSDbException()
		{
		}

		public QLNSDbException(string message)
			: base(message)
		{
		}

		public QLNSDbException(string message, Exception inner)
			: base(message, inner)
		{
		}
	}
}

