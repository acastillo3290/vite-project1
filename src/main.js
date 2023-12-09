import './style.css';
import { getPalettes } from './mods/util';
import { setLocalStorageKey, getLocalStorageKey } from './local-storage';
import { uuidv4 } from './mods/util';
const form = document.querySelector('#form');

const handleSubmit = (e) => {
    e.preventDefault();

    const formObj = Object.fromEntries(new FormData(e.target));
    console.log(formObj);
    addValue(formObj);

};

const getValue = (key) => getLocalStorageKey(key);
const setValue = (key, names) => setLocalStorageKey(key, names);

const addValue = (value) => {
    const keyId = uuidv4
    const values = getValue(keyId);
    setValue(keyId, [...values, value]);
};

const main = () => {
    getPalettes();
    form.addEventListener('submit', handleSubmit);
};
main();