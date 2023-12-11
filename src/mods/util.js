import palettes from '../palettes.json';
const userPalettes = document.querySelector('#user-palettes');

export const getPalettes = () => {
    palettes.forEach(element => {
        const div = document.createElement('div');
    div.className = 'default-div';
    div.innerHTML = `
    <li>
    <h1>${element.title} (Default)</h1>
      <br>
      <div style="background: ${element.colors[0]}">Text Example</div>
      <button>Copy ${element.colors[0]}</button>
      <br>
      <div style="background: ${element.colors[1]}">Text Example</div>
      <button>Copy ${element.colors[1]}</button>
      <br>
      <div style="background: ${element.colors[2]}">Text Example</div>
      <button>Copy ${element.colors[2]}</button>
      <div>${element.temperature}</div>
    </li>`;
        userPalettes.append(div);
    });
};

export const addNewElement = (value, where) => {
    const div = document.createElement('div');
    const data = JSON.parse(value);
    data.forEach(element => {
        div.className = 'default-div';
        div.innerHTML = `
        <li>
        <h1>${element['palette-title']}</h1>
        <br>
        <div style="background: ${element['color-1']}">Text Example</div>
        <button>Copy ${element['color-1']}</button>
        <br>
        <div style="background: ${element['color-2']}">Text Example</div>
        <button>Copy ${element['color-2']}</button>
        <br>
        <div style="background: ${element['color-3']}">Text Example</div>
        <button>Copy ${element['color-3']}</button>
        <button class="delete">Delete</button>
        <div>${element.temp}</div>
        </li>`;
        where.append(div);
    })
};

export const uuidv4 = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
};