using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Data
{
	public static class Database
	{
		public static List<Todo> Todos { get; private set; }

		static Database()
		{
			Todos = new List<Todo>
			{
				new Todo { Description = "Task 1", Done = true },
				new Todo { Description = "Task 2", Done = false },
				new Todo { Description = "Task 3", Done = false },
			};
		}
	}

	public class Todo
	{
		private static int m_increment = 1;

		public int Id { get; set; }

		public string Description { get; set; }

		public DateTime? Duedate { get; set; }

		public byte? Priority { get; set; }

		public bool Done { get; set; }

		public Todo()
		{
			Id = m_increment++;
		}
	}
}