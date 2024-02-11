function devModePasif() {
    if (!isLocalhost()) {
        sagTikEngel();
        konsolkapat();
        document.title = "arda";
    }
    else {
        alert("You are in development mode. You can't disable dev mode on localhost.");
        console.log("Welcome, He Who Remains.");
        document.title = "arda (Dev Mode)";
    }
}

function isLocalhost() {
    return window.location.hostname === "localhost";
}

function sagTikEngel() {
    document.addEventListener("contextmenu", function (dilosurucu) {
        dilosurucu.preventDefault();
    });
}

function konsolkapat() {
    DisableDevtool({
        ondevtoolopen(type, next) {
            next();
            alert("You think you're too smart, don't you?");
        }
    });
}

devModePasif();
