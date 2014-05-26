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
			var todo = Database.Todos.FirstOrDefault(t => t.Id == id);

			if (todo == null)
				return NotFound();

			return Ok(todo);
		}

		public IHttpActionResult Post([FromBody]Todo todo)
		{
			Database.Todos.Add(todo);

			var url = Url.Link("DefaultApi", new { id = todo.Id });

			return Created(url, todo);
		}

		public IHttpActionResult Put(int id, [FromBody]Todo update)
		{
			var todo = Database.Todos.FirstOrDefault(t => t.Id == id);

			if (todo == null)
				return NotFound();

			var index = Database.Todos.IndexOf(todo);
			Database.Todos[index] = update;

			var url = Url.Link("DefaultApi", new { id = update.Id });

			return Created(url, todo);
		}

		public IHttpActionResult Delete(int id)
		{
			var todo = Database.Todos.FirstOrDefault(t => t.Id == id);

			if (todo == null)
				return NotFound();

			Database.Todos.Remove(todo);

			return Ok();
		}
	}
}
