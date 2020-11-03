const delay = () => new Promise(resolve =>
    setTimeout(resolve(1), 1000));

async function umPorSegundo() {
    console.log(`${await delay()*1}s`);
    console.log(`${await delay()*2}s`);
    console.log(`${await delay()*3}s`);

}

umPorSegundo(); 
