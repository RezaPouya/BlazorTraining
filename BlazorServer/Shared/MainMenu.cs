using BlazorServer.Services;
using Microsoft.AspNetCore.Components;

namespace BlazorServer.Shared
{
    public class MainMenu : ComponentBase
    {
        [Inject]
        protected RandomService RandomSrv { get; set; }
        protected bool collapseNavMenu = true;
        protected string? NavMenuCssClass => collapseNavMenu ? "collapse" : null;

        protected override void OnInitialized()
        {
            base.OnInitialized();

            collapseNavMenu = false;
        }


        protected void ToggleNavMenu()
        {
            collapseNavMenu = !collapseNavMenu;
        }
    }
}
