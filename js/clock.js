// let userName = prompt('Lütfen İsminizi Giriniz');
let nameTemp = document.querySelector('span#myName');
let daysTemp = document.querySelector('div.days');
let hoursTemp = document.querySelector('div.hours');
let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
let dayIndex = new Date().getDay();
nameTemp.innerHTML = 'userName';

function showTime() {
    hoursTemp.innerHTML = `${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`
    daysTemp.innerHTML = `${days[dayIndex - 1]}`
}