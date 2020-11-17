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

namespace AcercaTest.Models
{
    public static class Dao
    {
        static string location = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Content\vehicles.json");
        public static VehicleList JsonToDao()
        {
            using (StreamReader file = File.OpenText(location))
            {
                JsonSerializer serializer = new JsonSerializer();
                var vehicles = (VehicleList)serializer.Deserialize(file, typeof(VehicleList));
                return vehicles;
            }
        }
        public static void DaoToJson(VehicleList vehicles)
        {
            using (StreamWriter filewriter = File.CreateText(location))
            {
                JsonSerializer serializerwritter = new JsonSerializer();
                serializerwritter.Serialize(filewriter, vehicles);
            }
        }
    }
}