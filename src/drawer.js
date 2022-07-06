

window.addEventListener( "load", () => {

    var drawer = document.querySelector( "drawer" );
    var options = document.querySelectorAll( "option" );

    drawer.innerHTML = `
        <drawer-head>
            <profile>
                <h1>AS</h1>
            </profile>
        </drawer-head>
        <drawer-body>
            <li>
                <img src="src/assets/pix/natal/buildings-cabin-house-svgrepo-com.svg" alt="" width="35px" height="32px">
                <option>Opção 1</option>
            </li>
            <li>
                <img src="src/assets/pix/natal/adornment-christmas-decoration-svgrepo-com.svg" alt="" width="35px" height="32px">
                <option>Opção 2</option>
            </li>
            <li>
                <img src="src/assets/pix/natal/christmas-clothing-garment-svgrepo-com.svg" alt="" width="35px" height="32px">
                <option>Opção 3</option>
            </li>
        </drawer-body>
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

