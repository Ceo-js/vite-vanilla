

window.addEventListener( "load", () => {

    var drawer = document.querySelector( "drawer" );
    var options = document.querySelectorAll( "option" );

    drawer.innerHTML = `
        <drawer-head>
            <profile>
                <img class="drawerswitch" src="src/assets/pix/natal/adornment-christmas-decoration-svgrepo-com.svg" alt="" width="35px" height="35px">
            </profile>
        </drawer-head>
        <drawer-body>
            <spaced></spaced>
            <li>
                <pholder>
                    <img src="src/assets/pix/natal/buildings-cabin-house-svgrepo-com.svg" alt="" width="35px" height="35px">
                </pholder>
                <option onclick="window.open('http://192.168.15.16:8000', '_self');">192.168.15.16:8000</option>
            </li>
            <li>
                <pholder>
                    <img src="src/assets/pix/natal/adornment-christmas-decoration-svgrepo-com.svg" alt="" width="35px" height="35px">
                </pholder>
                <option onclick="window.open('https://ceo-js.github.io/vite-vanilla', '_self');">ceo-js.github.io/vite-vanilla</option>
            </li>
            <li>
                <pholder>
                    <img src="src/assets/pix/natal/christmas-clothing-garment-svgrepo-com.svg" alt="" width="35px" height="35px">
                </pholder>
                <option>Opção 3</option>
            </li>
            <spaced></spaced>
        </drawer-body>
        <drawer-footer></drawer-footer>
    `;

    // drawer.addEventListener( "", () );
    // switch( drawer.style.width ) {
    //     case "": options.style.display = "block";
    //     break;
    //     case "68px": options.style.display = "none";
    //     break;
    //     case "350px": options.style.display = "block";
    //     break;
    // }

} );

