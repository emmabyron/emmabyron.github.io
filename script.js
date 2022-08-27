db = db.split("\n").map(string => string.split("; "));

var output = "";

for (let i of db) {
    output += "<tr>";

    for (let j of i) {
        output += "<td>";
        output += j;
        output += "</td>";
    }

    output += "</tr>";
}

document.getElementById("tournaments").innerHTML = output;