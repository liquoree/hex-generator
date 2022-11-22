document.querySelector('.cop').addEventListener('click', (el) => {
    let hex = document.querySelector('.hex-name').textContent;
    navigator.clipboard.writeText(hex)
    .then(() => {
        console.log(`copied ${hex}`)
    })
    .catch(() => {
        console.log('fail')
    })
})
document.querySelector('.gen').addEventListener('click', (el) => {
    const generateHex = () => {
        symbols = 'ABCDEF1234567890';
        let res = '';
        for (i=0; i<6; i++) {
            let pos = Math.floor(Math.random() * symbols.length);
            res += symbols.slice(pos, pos+1)
        }
        return res;
    }
    document.querySelector('.back').style.backgroundColor = '#' + String(generateHex());
    document.querySelector('.hex-name').innerHTML = '#' + String(generateHex());
})