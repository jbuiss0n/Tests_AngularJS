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
			Todos = new List<Todo>();
		}
	}

	public class Todo
	{
		public string Description { get; set; }

		public bool Done { get; set; }
	}
}