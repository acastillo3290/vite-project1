const userPalettes = document.querySelector('#user-palettes')

export const handleSubmit = (e) => {
    e.preventDefault();

    const formObj = Object.fromEntries(new FormData(e.target));
    const card = document.createElement('div');
    const title = document.createElement('h1');
    
    card.append(title);
    userPalettes.append(card);
};