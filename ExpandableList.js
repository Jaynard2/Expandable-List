let expandableLists = document.getElementsByClassName("expandable-list");

        for (let i = 0; i < expandableLists.length; i++)
        {
            let element = expandableLists[i].getElementsByClassName("expandable-list-title")[0];

            if (element == null)
                continue;

            element.addEventListener("click", function()
            {
                this.setAttribute("aria-pressed", (element.getAttribute("aria-pressed") == "false") ? "true" : "false");
            });
        }
