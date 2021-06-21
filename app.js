const seats = {}
fetch('./seats.txt')
.then(res => res.text())
.then(text => text.replace(/(.+)\t(.+)/g, (_, name, table) => seats[name.trim()] = table.trim() ) && console.log('seats loaded', { seats }))
.then(() => { 
    find();
    document.getElementById('name').focus();
});

function find() {
    const value = document.getElementById('name').value;
    const footer = "שים לב: במידה והשולחן מלא, תרגיש חופשי לשבת במקומות הלא מסומנים, תודה שבאת&#128591";
    let html = "";
    if (value) {
        const matches = Object.keys(seats)
            .filter(name => name.includes(value))
            .sort();

        html = matches.length 
            ? '<p>' + matches.slice(0, 3).map(name => `${name.replace(value, `<b>${value}</b>`)} - שולחן  ${seats[name]}`).join('</p><hr /><p>') + '</p>'
            : '<p><b>אין תוצאות</b></p><hr /><p>אנא בדוק שאין טעות בשם.<br> יש להקליד בעברית<br> במידה ולא נמצא לך שולחן, תרגיש חופשי לשבת במקומות הלא מסומנים, תודה שהגעת&#128519 </p>';

        if (matches.length > 3) html += `<br><p><small> ועוד ${matches.length - 3} התאמות</small></p></br>`;
        if (matches.length >= 1) html += `<hr /></p><b>${footer}</b></p>`;
    } else {
        html = '<p>הזן שם ולחץ על "חפש"</p>';
    }

    document.getElementById('out').innerHTML = html;
}
