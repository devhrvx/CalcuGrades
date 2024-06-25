document.getElementById("calculate-button").addEventListener("click", function() {
    const gradeRows = document.querySelectorAll(".grades-input");
    let finalGrades = [];
    
    gradeRows.forEach(row => {
        const q1 = parseFloat(row.querySelector("#q1").value) || 0;
        const q2 = parseFloat(row.querySelector("#q2").value) || 0;
        const finalGrade = ((q1 + q2) / 2).toFixed(0);

        row.querySelector("#final").textContent = finalGrade;
        finalGrades.push(parseFloat(finalGrade));
    });

    const generalAverage = (finalGrades.reduce((acc, val) => acc + val, 0) / finalGrades.length).toFixed(0);

    let award = "None";
    if (generalAverage >= 97.5) {
        award = "With Highest Honors";
    } else if (generalAverage >= 94.5) {
        award = "With High Honors";
    } else if (generalAverage >= 89.5) {
        award = "With Honors";
    }
    document.getElementById("gen-ave").textContent = generalAverage;
    document.getElementById("award").textContent = award;
});
