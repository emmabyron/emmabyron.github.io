tournaments = open("tournaments.txt", "r")
db = open("db.txt", "w")

array = [i.split("; ") for i in tournaments.read().split("\n")]

output = ""

for i in array:
    output += "<tr>"

    for j in i:
        output += "<td>"
        output += j
        output += "</td>"
    
    output += "<tr>"

db.write("var db = \"" + output + "\"")

tournaments.close()
db.close()