////////////////Задача №1

// let time = prompt('Введите пожалуйста время от 1 - 24');
// console.log(time)

///////Задача №2
// let mileage = +prompt('Введите пробег Вашего автомобиля')
// let age_vehicle = +prompt('Введите возраст Вашего авто')
// console.log(mileage/age_vehicle)
// console.log((mileage/age_vehicle)/12)
// console.log(((mileage/age_vehicle)/12)/12)
// console.log(((mileage/age_vehicle)/12)/365)

//////Задача №3
// let lang = confirm('Выберите пожалуйста язык')

// if(lang === true){
//     console.log('Monday, November 9, 2022')
// }else{
//     console.log('Понедельник, 9 Ноября, 2022')
// }

///Задача №4 Вариант №1
// let total_items = +prompt('Введите общую сумму ценности товаров')
// let delivery = prompt('Укажите каким видом доставки, Вы хотели бы их доставить -> "Air","Land","Sea"')

// if(delivery === 'Air' && 'air'){
//     console.log(((total_items)/100)*15+total_items)
// }else if(delivery === 'Land' && 'land'){
//     console.log(((total_items)/100)*10+total_items)
// }else if (delivery === 'Sea' && 'sea'){
//     console.log(((total_items)/100)*7.5+total_items)
// }else{
//     alert('Пожалуйста выберите один из предложенных видов доставки')
// }

///Задача №4 Вариант №2
let total_items = +prompt('Введите общую сумму ваших товаров')
let delivery = prompt('Укажите каким видом доставки, Вы хотели бы их доставить -> "air","land","sea"')
let air = total_items + ((total_items / 100 )* 15)
let land = total_items + ((total_items / 100 )* 10)
let sea = total_items + ((total_items / 100 )* 7.5)

if(delivery === 'air'){
    console.log(air)
}else if(delivery === 'land'){
    console.log(land)
}else if(delivery === 'sea'){
    console.log(sea)
}else{
    alert('Выберите один из видов доставки, введя слово "air, land или же sea')
}