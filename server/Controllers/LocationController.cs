using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Text;
using server.Models;
using System.Web.Script.Serialization;

namespace server.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins:"*",headers:"*",methods:"*")]
    public class LocationController : ApiController
    {
        // GET: api/Location
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Location/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Location
        public void Post([FromBody]Data value)
        {
            StreamWriter sw = File.AppendText("C:/Users/This_user/Desktop/file.json");
            var json = new JavaScriptSerializer().Serialize(value);            
            sw.WriteLine(json);
            sw.Close();
        }

        // PUT: api/Location/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Location/5
        public void Delete(int id)
        {
        }
    }
}
