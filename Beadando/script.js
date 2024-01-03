document.addEventListener("DOMContentLoaded", function () {
    const scheduleGrid = document.getElementById("scheduleGrid");

    const days = ["Órák", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
    const hours = ["", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

    // Órarend fejléc (napok és órák)
    days.forEach(day => {
        const headerCell = document.createElement("div");
        headerCell.classList.add("header-cell");
        headerCell.textContent = day;
        scheduleGrid.appendChild(headerCell);
    });

    // Órarend kitöltése a megadott órák alapján
    const scheduleData = [
        ["8:00-9:40", "", "", "", "", "", "", ""],
        ["10:00-11.40", "Mikroökonómia előadás", "Vállalati pénzügy előadás", "Emberi erőforrás", "Webprogramozás", "", "", ""],
        ["11:50-13:30", "Mikroökonómia gyakorlat", "EU integráció előadás", "", "", "Vállalati pénzögy gyakorlat", "", ""],
        ["13:40-15:20", "Számviteli alapok", "Diszkrét matematika", "Statisztika", "", "", "", ""],
        ["15:30-17:10", "", "", "Alapozó gazdaságtan", "", "Magprog2", "", ""],
        ["17:20-19:00", "", "", "", "", "", "", ""],
        
    ];

    for (let i = 0; i < hours.length; i++) {
        for (let j = 0; j < days.length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("schedule-cell");

            const scheduleItem = scheduleData[i][j];
            cell.innerHTML = `<strong>${scheduleItem}</strong>`;
            scheduleGrid.appendChild(cell);
        }
    }
});
