using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft;
using AcercaTest.Models;
using Newtonsoft.Json.Linq;
using System.IO;
using Newtonsoft.Json;
using System.Web.Http.Cors;

namespace AcercaTest.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/v1/vehicles")]
    public class VehiclesController : ApiController
    {
        // GET: api/Vehicles
        [Route ("vehicles")]
        public VehicleList Get()
        {
            string location = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,@"Content\vehicles.json");
            return Dao.JsonToDao();
         
        }
        [Route("vehicles/{id:long}")]
        // GET: api/Vehicles/5
        public Vehicle Get(long id)
        {
            var vehicles = Dao.JsonToDao();
            Vehicle vh = vehicles.vehicles.SingleOrDefault(a => a.order == id);
            if (vh == null)
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));

            return vh;
            
        }

        /// <summary>
        /// Añade un vehículo nuevo
        /// </summary>
        /// <param name="value"></param>
        // POST: api/Vehicles
        [Route("vehicles")]
        public void Post([FromBody]Vehicle v)
        {
            var vehicles = Dao.JsonToDao();
            //El número de pedido es pk
            if (vehicles.vehicles.Any(a => a.order == v.order))
            {
                var errorResponse = Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Ya existe un vehículo con ese pedido ");
                throw new HttpResponseException(errorResponse);
            }
            //ya existe un vehículo con esa matrícula en otro pedido
            if (vehicles.vehicles.Any(a => a.register.ToLower() == v.register.ToLower()))
            {
                var errorResponse = Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Ya existe un vehículo con esa matrícula ");
                throw new HttpResponseException(errorResponse);

            }
            vehicles.vehicles.Add(v);
            Dao.DaoToJson(vehicles);
          
        }

        /// <summary>
        /// Edita un vehícuo
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        // PUT: api/Vehicles/5
        [Route("vehicles")]
        public void Put([FromBody]Vehicle v)
        {
            var vehicles = Dao.JsonToDao();

            Vehicle vh = vehicles.vehicles.SingleOrDefault(a => a.order == v.order);
            if (vh == null)
            {
                var errorResponse = Request.CreateErrorResponse(HttpStatusCode.NotFound, "No se encuentra el vehículo con ese pedido");
                throw new HttpResponseException(errorResponse);
            }
                //ya existe un vehículo con esa matrícula
             if (vehicles.vehicles.Any(a => a.order!=v.order &&  a.register.ToLower() == v.register.ToLower()))
            {
                var errorResponse = Request.CreateErrorResponse(HttpStatusCode.Forbidden, "Ya existe un vehículo con esa matrícula ");
                throw new HttpResponseException(errorResponse);
            }

            vh.register = v.register;
            vh.model = v.model;
            vh.frame = v.frame;
            vh.date = v.date;

            Dao.DaoToJson(vehicles);
        }

        /// <summary>
        /// Borra un vehículo
        /// </summary>
        /// <param name="id"></param>
            // DELETE: api/Vehicles/5
        [Route("vehicles/{id:long}")]
        public VehicleList Delete(long id)
        {
            var vehicles = Dao.JsonToDao();
            Vehicle vh = vehicles.vehicles.SingleOrDefault(a => a.order == id);
             if (vh == null)
            {
                var errorResponse = Request.CreateErrorResponse(HttpStatusCode.NotFound, "No se encuentra el vehículo con ese pedido");
                throw new HttpResponseException(errorResponse);
            }
               
            vehicles.vehicles.Remove(vh);
            Dao.DaoToJson(vehicles);
            return vehicles;
        }
        
    }
}
