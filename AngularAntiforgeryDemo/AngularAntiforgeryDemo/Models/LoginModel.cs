using Newtonsoft.Json;

namespace AngularAntiforgeryDemo.Models
{
    public sealed class LoginModel
    {
        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("password")]
        public string Password { get; set; }
    }
}