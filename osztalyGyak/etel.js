class Etel {
    constructor(nev, ar, kategoria, osszetevok) {
        this.nev = nev;
        this.ar = ar;
        this.kategoria = kategoria;
        this.osszetevok = osszetevok;
    }
}

const etelek = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('etelfelvetel-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const nev = document.getElementById('nev').value;
        const ar = document.getElementById('ar').value;
        const kategoria = document.getElementById('kategoria').value;
        const osszetevok = document.getElementById('osszetevok').value.split(',');

        const ujEtel = new Etel(nev, ar, kategoria, osszetevok);
        etelek.push(ujEtel);

        renderEtelek();
        this.reset();
    });
});

function renderEtelek() {
    const etelekDiv = document.getElementById('etelek');
    etelekDiv.innerHTML = '';

    const kategoriak = [...new Set(etelek.map(etel => etel.kategoria))];
    kategoriak.forEach(kategoria => {
        const kategoriaEtelek = etelek.filter(etel => etel.kategoria === kategoria);

        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'mt-3');
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th colspan="3">${kategoria}</th>
            </tr>
            <tr>
                <th>Név</th>
                <th>Ár</th>
                <th>Összetevők</th>
            </tr>
        `;
        const tbody = document.createElement('tbody');

        kategoriaEtelek.forEach(etel => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${etel.nev}</td>
                <td>${etel.ar} Ft</td>
                <td>${etel.osszetevok.join(', ')}</td>
            `;
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        etelekDiv.appendChild(table);
    });
}