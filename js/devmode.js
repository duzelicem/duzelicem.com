document.title = "arda";

function devMode1() {
    const urlParams = new URLSearchParams(window.location.search);

    if (isLocalhost1()) {

        document.title = "arda (Dev Mode)";
        console.log("You are in development mode. You can't disable dev mode on localhost.");

    } else if (urlParams.get('ardasexporno') === '1') {

        alert("You are in development mode. Welcome, Arda.");
        console.log("Welcome, He Who Remains.");
        document.title = "arda (Dev Mode)";

    } else {

        konsolkapat1();
        sagTikEngel1();
        document.title = "arda";
        
    }
}

function isLocalhost1() {
    return window.location.hostname === "localhost";
}

function sagTikEngel1() {
    document.addEventListener("contextmenu", sagTikEngelHandler);
}

function konsolkapat1() {
    DisableDevtool({
        ondevtoolopen(type, next) {
            next();
            alert("You think you're too smart, don't you?");
        }
    });
}
devMode1();
