namespace BlazorWebAssembly.Services
{
    public class RandomService
    {
        public string RandomGuid = Guid.NewGuid().ToString().Replace("-","").Substring(0,8);   
    }
}
