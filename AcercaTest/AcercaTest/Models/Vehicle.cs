using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AcercaTest.Models
{
    public class VehicleList
    {

        public List<Vehicle> vehicles { get; set; }

    }
    public class Vehicle
    {
        public long order { get; set; }
        public string model { get; set; }
        public string register { get; set; }
        public string frame { get; set; }
        public string date { get; set; }

    }
  
}