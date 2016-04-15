using Newtonsoft.Json;

namespace AngularAntiforgeryDemo.Models
{
    public sealed class AntiForgeryTokenModel
    {
        [JsonProperty("antiForgeryToken")]
        public string AntiForgeryToken { get; set; }
    }
}