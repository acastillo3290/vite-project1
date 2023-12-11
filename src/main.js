import './style.css';
import { getPalettes, addNewElement } from './mods/util';
import { setLocalStorageKey, getLocalStorageKey } from './local-storage';
import { uuidv4 } from './mods/util';
const form = document.querySelector('#form');
const userPalettes = document.querySelector('#user-palettes');

const handleSubmit = (e) => {
    e.preventDefault();

    const formObj = Object.fromEntries(new FormData(e.target));
    addValue(formObj);
    const div = document.createElement('div');
    div.className = 'default-div';
    div.innerHTML = `
    <li>
    <h1>${formObj['palette-title']}</h1>
    <br>
    <div style="background: ${formObj['color-1']}">Text Example</div>
    <button>Copy ${formObj['color-1']}</button>
    <br>
    <div style="background: ${formObj['color-2']}">Text Example</div>
    <button>Copy ${formObj['color-2']}</button>
    <br>
    <div style="background: ${formObj['color-3']}">Text Example</div>
    <button>Copy ${formObj['color-3']}</button>
    <button class="delete">Delete</button>
    <div>${formObj.temp}</div>
    </li>`;
    userPalettes.append(div);

    e.target.reset();
};

const getValue = (key) => getLocalStorageKey(key);
const setValue = (key, names) => setLocalStorageKey(key, names);

const addValue = (value) => {
    const keyId = uuidv4();
    const values = getValue(keyId);
    setValue(keyId, [...(values == null ? [] : values), value]);
};

const restoreFromLocal = () => {
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
        addNewElement( localStorage.getItem( localStorage.key( i ) ), userPalettes );
    }
};

const handleDelete = () => {
    const deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach(element => {
        element.addEventListener('click', (e) => {
            console.log(localStorage.getItem( localStorage.key(e)));
        });
    });
};

const main = () => {
    getPalettes();
    restoreFromLocal();
    handleDelete();
    form.addEventListener('submit', handleSubmit);
};
main();