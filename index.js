// 1. POINTS TABLE DATA & LOGIC
const pointsData = {
    "RAHUL 11": { m: 0, w: 0, l: 0, p: 0 },
    "BAPU 11": { m: 0, w: 0, l: 0, p: 0 },
    "SUSANTA 11": { m: 0, w: 0, l: 0, p: 0 },
    "BABULA 11": { m: 0, w: 0, l: 0, p: 0 },
    "TAPAN 11": { m: 0, w: 0, l: 0, p: 0 }
};

// LocalStorage se purana data load karna
if (localStorage.bpl) {
    Object.assign(pointsData, JSON.parse(localStorage.bpl));
}

// Match update karne ka function (Points.html ke liye)
function updateMatch() {
    let A = document.getElementById("teamA").value;
    let B = document.getElementById("teamB").value;
    let W = document.getElementById("winner").value;

    if (A === B) { alert("Same team!"); return; }

    pointsData[A].m++; pointsData[B].m++;

    if (W === "A") {
        pointsData[A].w++; pointsData[A].p += 2; pointsData[B].l++;
    } else {
        pointsData[B].w++; pointsData[B].p += 2; pointsData[A].l++;
    }

    localStorage.bpl = JSON.stringify(pointsData);
    alert("Updated!");
    location.reload(); // Table update karne ke liye refresh
}

// Table display karne ka logic
const table = document.getElementById("pointsTable");
if (table) {
    for (let t in pointsData) {
        table.innerHTML += `
        <tr>
            <td>${t}</td>
            <td>${pointsData[t].m}</td>
            <td>${pointsData[t].w}</td>
            <td>${pointsData[t].l}</td>
            <td>${pointsData[t].p}</td>
        </tr>`;
    }
}

// 2. PLAYER LIST DATA (Alag variable name taaki conflict na ho)
const playerSquads = {
    rahul: [
        "Rahul (Captain)", "Rahul – Player 2", "Rahul – Player 3", "Rahul – Player 4", "Rahul – Player 5",
        "Rahul – Player 6", "Rahul – Player 7", "Rahul – Player 8", "Rahul – Player 9", "Rahul – Player 10",
        "Rahul – Player 11", "Rahul – Player 12", "Rahul – Player 13", "Rahul – Player 14", "Rahul – Player 15"
    ],
    bapu: [
        "Bapu (Captain)", "Bapu – Player 2", "Bapu – Player 3", "Bapu – Player 4", "Bapu – Player 5",
        "Bapu – Player 6", "Bapu – Player 7", "Bapu – Player 8", "Bapu – Player 9", "Bapu – Player 10",
        "Bapu – Player 11", "Bapu – Player 12", "Bapu – Player 13", "Bapu – Player 14", "Bapu – Player 15"
    ],
    susanta: [
        "Susanta (Captain)", "Susanta – Player 2", "Susanta – Player 3", "Susanta – Player 4", "Susanta – Player 5",
        "Susanta – Player 6", "Susanta – Player 7", "Susanta – Player 8", "Susanta – Player 9", "Susanta – Player 10",
        "Susanta – Player 11", "Susanta – Player 12", "Susanta – Player 13", "Susanta – Player 14", "Susanta – Player 15"
    ],
    babula: [
        "Babula (Captain)", "Babula – Player 2", "Babula – Player 3", "Babula – Player 4", "Babula – Player 5",
        "Babula – Player 6", "Babula – Player 7", "Babula – Player 8", "Babula – Player 9", "Babula – Player 10",
        "Babula – Player 11", "Babula – Player 12", "Babula – Player 13", "Babula – Player 14", "Babula – Player 15"
    ],
    tapan: [
        "Tapan (Captain)", "Tapan – Player 2", "Tapan – Player 3", "Tapan – Player 4", "Tapan – Player 5",
        "Tapan – Player 6", "Tapan – Player 7", "Tapan – Player 8", "Tapan – Player 9", "Tapan – Player 10",
        "Tapan – Player 11", "Tapan – Player 12", "Tapan – Player 13", "Tapan – Player 14", "Tapan – Player 15"
    ]
};

// 3. NAYE PAGE PAR PLAYER LIST DIKHANE KA LOGIC
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const team = params.get('team'); // URL se team ID lega

    const heading = document.getElementById("teamNameDisplay");
    const list = document.getElementById("playerListDisplay");

    if (team && playerSquads[team]) {
        if(heading) heading.innerText = team.toUpperCase() + " 11";
        if(list) {
            list.innerHTML = "";
            playerSquads[team].forEach(player => {
                const li = document.createElement("li");
                li.innerText = player;
                list.appendChild(li);
            });
        }
    }
};