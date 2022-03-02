export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    dateFormat
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function dateFormat(time){
    const year = time.getFullYear();
    const month = (time.getMonth()+1+'').padStart(2,'0');
    const day = (''+time.getDate()).padStart(2,'0');
    return year+'-'+month+'-'+day;
}