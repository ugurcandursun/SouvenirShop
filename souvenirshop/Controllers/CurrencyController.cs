using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml;

namespace souvenirshop.Controllers
{
    public class CurrencyController : ApiController
    {
        // GET: api/Currency
        public string Get()
        {
            XmlDocument xmlVerisi = new XmlDocument();
            xmlVerisi.Load("http://www.tcmb.gov.tr/kurlar/today.xml");
            decimal dolar = Convert.ToDecimal(xmlVerisi.SelectSingleNode(string.Format("Tarih_Date/Currency[@Kod='{0}']/ForexSelling", "USD")).InnerText.Replace('.', ','));
            
          
            return dolar.ToString();
        }

        // GET: api/Currency/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Currency
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Currency/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Currency/5
        public void Delete(int id)
        {
        }
    }
}
