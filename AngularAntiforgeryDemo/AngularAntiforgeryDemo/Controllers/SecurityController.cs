using System;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Helpers;
using System.Web.Http;
using AngularAntiforgeryDemo.Infrastructure;
using AngularAntiforgeryDemo.Models;
using Newtonsoft.Json;

namespace AngularAntiforgeryDemo.Controllers
{
    [RoutePrefix("api/v1/security")]
    public class SecurityController : ApiController
    {
        [HttpGet]
        [Route("antiforgerytoken")]
        public HttpResponseMessage GetAntiForgeryToken()
        {
            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);

            HttpCookie cookie = HttpContext.Current.Request.Cookies["xsrf-token"];

            string cookieToken;
            string formToken;
            AntiForgery.GetTokens(cookie == null ? "" : cookie.Value, out cookieToken, out formToken);

            AntiForgeryTokenModel content = new AntiForgeryTokenModel
            {
                AntiForgeryToken = formToken
            };

            response.Content = new StringContent(JsonConvert.SerializeObject(content), Encoding.UTF8, "application/json");

            if (!string.IsNullOrEmpty(cookieToken))
            {
                response.Headers.AddCookies(new[]
                {
                    new CookieHeaderValue("xsrf-token", cookieToken)
                    {
                        Expires = DateTimeOffset.Now.AddMinutes(10),
                        Path = "/"
                    }
                });
            }

            return response;
        }

        [ValidateAntiForgeryTokenFilter]
        [HttpPost]
        [Route("login")]
        public HttpResponseMessage Login(LoginModel model)
        {
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}