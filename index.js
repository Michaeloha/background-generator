var database = [
    {
        username: "michael",
        password: "1234"
    },

    {
        username: "nkolika",
        password: "buffy"
    },

    {
        username: "sophy",
        password: "4567"
    }

];

var newsFeeds = [
    {
        username: "Nkolika",
        timeline: "working from home since lockdown"
    },

    {
        username: "Mikky",
        timeline: "Jesus Christ has been good to me and our families during this world crises. Coding is what keeps me going in this pandemic"
    },

    {
        username: "Mikkolo",
        timeline: "Our Father, who art in heaven"
    }

];


// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }

    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeeds);

    } else {
        alert("Username or Password is incorrect, try again later");
    }
}
