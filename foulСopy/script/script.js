const myArr = ['первый', 'второй', 'третий'];

myArr.forEach(item => console.log(capitalizeFirstLetter(item)));

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}