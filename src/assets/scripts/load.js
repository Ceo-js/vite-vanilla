

window.addEventListener( "load", () => {

    var drawerSwitch = document.querySelector( "appbar-left" );
    var drawerToggle = document.querySelector( "appbar-right" );
    var option = document.querySelectorAll( "option" );
    var drawer = document.querySelector( "drawer" );
    var drawerObserver = 0;

    function print( v ) { console.table( v ); }
    drawer.style.width = "0";

    
    drawerSwitch.addEventListener( "click", () => {
        switch( drawer.style.width ) {
            case "": drawer.style.width = "350px";
                     option[0].style.display = "block";
                     option[1].style.display = "block";
                     option[2].style.display = "block";
                break;
            case "68px": drawer.style.width = "350px";
                         option[0].style.display = "block";
                         option[1].style.display = "block";
                         option[2].style.display = "block";
                break;
            case "350px": drawer.style.width = "68px";
                          option[0].style.display = "none";
                          option[1].style.display = "none";
                          option[2].style.display = "none";
                break;
        }
    } );

    drawerToggle.addEventListener( "click", () => {
        switch( drawerObserver ) {
            case 0: drawer.style.width = "68px";
                    drawerObserver = 2;
                    option[0].style.display = "none";
                    option[1].style.display = "none";
                    option[2].style.display = "none";
                    print( `drawerToggle: ${this} - observer: 0` );
                break;
            case 1: drawer.style.width = "68px";
                    drawerObserver = 2;
                    option[0].style.display = "none";
                    option[1].style.display = "none";
                    option[2].style.display = "none";
                    print( `drawerToggle: ${this} - observer: 1` );
                break;
            case 2: drawer.style.width = "0";
                    drawerObserver = 1;
                    option[0].style.display = "none";
                    option[1].style.display = "none";
                    option[2].style.display = "none";
                    print( `drawerToggle: ${this} - observer: 2` );
                break;
        }
    } );

    


} );