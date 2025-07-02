let addBtn = document.getElementById("btn");

addBtn.addEventListener('click', () => {
    addNote();
})

function addNote(noteContent = '', noteDate = '') {
    let div = document.createElement('div');
    let date = noteDate || new Date().toLocaleString();
    div.innerHTML = `
    <div class="singleNote">
        <div class="btns">
            <button class="edit">Edit</button>
            <button class="save">Save</button>
            <button class="delete">Delete</button>
        </div>
        <div class="note ${noteContent ? '' : 'hide'}">${noteContent}</div>
        <textarea class="note txt ${noteContent ? 'hide' : ''}">${noteContent}</textarea>
        <div class="date">${date}</div>
    </div>`;

    let note = div.querySelector(".note:not(textarea)");
    let textA = div.querySelector("textarea");
    let editBtn = div.querySelector('.edit');
    let saveBtn = div.querySelector('.save');
    let deleteBtn = div.querySelector('.delete');

    editBtn.addEventListener('click', () => {
        note.classList.toggle('hide');
        textA.classList.toggle('hide');
    })
    saveBtn.addEventListener('click', () => {
        note.innerHTML = textA.value;
        textA.classList.toggle('hide');
        note.classList.toggle('hide');
        updateStorage();
    })
    textA.addEventListener('input', () => {
        updateStorage();
    })

    deleteBtn.addEventListener('click', () => {
        div.remove();
        updateStorage();
    })
    document.querySelector('.allNotes').appendChild(div);
}

function updateStorage() {
    data = [];
    document.querySelectorAll('.singleNote').forEach(div => {
        let text = div.querySelector('textarea').value;
        let date = div.querySelector('.date').textContent;
        data.push({ text, date });
    });
    localStorage.setItem('notes', JSON.stringify(data));
}

let data = JSON.parse(localStorage.getItem('notes')) || [];

function displayNotes() {
    data.forEach(note => {
        if (note) {
            addNote(note.text, note.date);
        }
    });
}

displayNotes();
updateStorage();