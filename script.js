const subjects = {
    "ict": [
        "Computer/Web Programming 3 - Computer Programming NC III (Java) (320 hrs)",
        "Earth and Life Science",
        "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        "Mobile App Programming 1 - Computer Programming NC III (Java) (320 hrs)",
        "Physical Education and Health 2",
        "Practical Research 1",
        "Reading and Writing",
        "Statistics and Probability",
        "Understanding Culture, Society and Politics"
    ],
    "digital-arts": [
        "Fundamentals of Computer Drawing",
        "Digital Design and Graphics Manipulation",
        "Earth and Life Science",
        "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        "Physical Education and Health 2",
        "Practical Research 1",
        "Reading and Writing",
        "Statistics and Probability",
        "Understanding Culture, Society and Politics"
    ],
    "abm": [
        "Fundamentals of ABM",
        "Business Math",
        "Earth and Life Science",
        "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        "Physical Education and Health 2",
        "Practical Research 1",
        "Reading and Writing",
        "Statistics and Probability",
        "Understanding Culture, Society and Politics"
    ],
    "stem": [
        "Pre Calculus",
        "Earth and Life Science",
        "General Biology",
        "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        "Physical Education and Health 2",
        "Practical Research 1",
        "Reading and Writing",
        "Statistics and Probability",
        "Understanding Culture, Society and Politics"
    ],
    "to": [
        "Earth and Life Science",
        "Front Office Services",
        "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        "Physical Education and Health 2",
        "Practical Research 1",
        "Reading and Writing",
        "Statistics and Probability",
        "Travel and Tourism",
        "Understanding Culture, Society and Politics"
    ],
    "humms": [
        "Creative Writing / Malikhaing Pagsulat",
        "Disciplines and Ideas in the Applied Social Sciences",
        "Earth and Life Science",
        "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
        "Physical Education and Health 2",
        "Practical Research 1",
        "Reading and Writing",
        "Statistics and Probability",
        "Understanding Culture, Society and Politics"
    ],
};

document.getElementById("strand-select").addEventListener("change", function() {
    const strand = this.value;
    const subjectsContainer = document.getElementById("subjects-container");
    
    subjectsContainer.innerHTML = ""; // Clear existing subjects

    if (subjects[strand]) {
        subjects[strand].forEach(subject => {
            subjectsContainer.innerHTML += `
                <div class="h-container">${subject}</div>
                <hr>
                <table>
                    <tr id="quarters">
                        <th>1st Quarter</th>
                        <th>2nd Quarter</th>
                        <th>Final Grade</th>
                    </tr>
                    <tr class="grades-input">
                        <td><input type="number" class="q1"></td>
                        <td><input type="number" class="q2"></td>
                        <td class="final">-</td>
                    </tr>
                </table>`;
        });
    }
});

document.getElementById("calculate-button").addEventListener("click", function() {
    const gradeRows = document.querySelectorAll(".grades-input");
    let finalGrades = [];
    
    gradeRows.forEach(row => {
        const q1 = parseFloat(row.querySelector(".q1").value) || 0;
        const q2 = parseFloat(row.querySelector(".q2").value) || 0;
        const finalGrade = ((q1 + q2) / 2).toFixed(0);

        row.querySelector(".final").textContent = finalGrade;
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
