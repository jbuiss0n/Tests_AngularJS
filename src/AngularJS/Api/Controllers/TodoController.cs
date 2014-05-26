using Api.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
	public class TodoController : ApiController
	{
		public IHttpActionResult Get()
		{
			var todos = Database.Todos;

			return Ok(todos);
		}

		public IHttpActionResult Get(int id)
		{
			var todo = Database.Todos[id];

			return Ok(todo);
		}

		public IHttpActionResult Post([FromBody]Todo todo)
		{
			Database.Todos.Add(todo);

			var id = Database.Todos.Count;

			return Created(Url.Link("DefaultApi", new { id = id }), todo);
		}

		public IHttpActionResult Delete(int id, [FromBody]Todo todo)
		{
			Database.Todos.Remove(todo);

			return Ok(todo);
		}
	}
}
