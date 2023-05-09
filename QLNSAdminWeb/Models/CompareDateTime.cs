namespace QLNSAdminWeb.Models
{
	public class CompareDateTime
	{

		public int CompareDay(int month, int year)
		{
			if (namhuan(year))
			{
				if (month == 2) return 29;
				if (month == 1 && month == 3 && month == 5 && month == 7 && month == 8 && month == 10 && month == 11 && month == 12)
					return 31;
				return 30;
			}
			if (month == 2) return 28;
			if (month == 1 && month == 3 && month == 5 && month == 7 && month == 8 && month == 10 && month == 11 && month == 12)
				return 31;
			return 30;
		}

		public bool namhuan(int year)
		{
			if (year % 4 == 0)//chia hết cho 4 là năm nhuận
			{
				if (year % 100 == 0)
				//nếu vừa chia hết cho 4 mà vừa chia hết cho 100 thì không phải năm nhuận
				{
					if (year % 400 == 0)//chia hết cho 400 là năm nhuận
						return  true;
					else
						return  false;//không chia hết cho 400 thì không phải năm nhuận
				}
				else//chia hết cho 4 nhưng không chia hết cho 100 là năm nhuận
					return  true;
			}
			else
			{
				return  false;
			}
		}
	}
}
