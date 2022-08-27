db = db.split("\n").map(string => string.split("; "));

let output = "";

for (const i of db) {
    output += "<tr>";

    for (const j of i) {
        output += "<td>";
        output += j;
        output += "</td>";
    }

    output += "</tr>";
}

document.getElementById("tournaments").innerHTML = output;