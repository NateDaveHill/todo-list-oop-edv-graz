export function saveToLocalStorage(data, key) {
    const dataStringified = JSON.stringify(data);
    localStorage.setItem(key, dataStringified);
}

export function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    //TODO: data validation for later
    return JSON.parse(data);
}