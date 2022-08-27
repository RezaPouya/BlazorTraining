using Microsoft.JSInterop;

namespace BlazorServer.Helpers
{
    public class RandomHelper
    {
        [JSInvokable]
        public Task<int> MethodFromInstantiateClass(int maxValue)
        {
            return Task.FromResult(new Random().Next(maxValue));
        }
    }
}
