"use strict"

////////// РАБОТА СО СТРОКАМИ

const string: string = "Hello, this is a test string"
const string2: string = "This is the second string"

let loggerIndex = 1

export const lg: Function = (message: string): void => {
    console.log(`№ ${loggerIndex}: ${message}`)
    loggerIndex += 1
}

lg(string.toLowerCase())            //нижний регистр
lg(string.toUpperCase())            //верхний регистр
lg(string.concat(string2))          //слепить строки
lg(string.split(" "))               //в массив с разделителем
lg(string.repeat(2))                //повторить
lg(string.charAt(2))                //символ по индексу
lg(string.includes("test"))         //булен включает или нет
lg(string.indexOf("is"))            //индекс первого вхождения подстроки
lg(string.lastIndexOf("is"))        //индекс последнего вхождения подстроки
lg(string.endsWith("ing"))          //заканчивается этим
lg(string.startsWith("He"))         //начинается с этого
lg(string.search("th"))             //индекс начала совпадения
lg(string.slice(1, 5))              //подстрока из строки
lg(string.substring(5, 1))          //тоже самое
lg(string.replace(/is/g, "IS"))     //создание новой строки из строки с заменой
lg(string.padEnd(40, "d"))          //добавить в конец символов пока длинна не станет равной
lg(string.padStart(40, "d"))        //в начало
lg(`     ${string} `.trim())        //убрать пробелы везде

////////// РАБОТА С МАССИВАМИ

let array: number[] = [1, 5, 2, 3, 7, 6]
const less40 = (value: number): boolean => value < 7

lg(Array.from(string))              //формирует массив из строки
lg(Array.of(string, string2))       //создает массив из элементов
lg(array.at(1))                     //элемент массива по индексу
lg(array.concat(array))             //соединяет два массива
lg(array.entries())                 //перегоняет массив в ключ/значение пару
lg(array.every(less40))             //проверяет все элементы по условию
lg(array.filter(less40))            //фильтрует массив по условию
lg(array.find(less40))              //ищет первый подходящий по условию
lg(array.findIndex(less40))         //тоже самое, только индекс
lg([...array, array].flat())        //раскумаривает элементы подмассива в основной
lg(array.join(""))                  //склеивает в строку
lg(array.keys())                    //ключи массива
lg(array.map(less40))               //новый массив из существующего
lg(array.pop())                     //убирает из конца массива и возвращает
lg(array.push(9))                   //добавляет в конец и возвращает новую длинну
lg(array.reverse())                 //инвертирует
lg(array.shift())                   //убирает из начала массива и возвращает убранное
lg(array.unshift())                 //добавляет в начало массива и возвращает длинну
lg(array.some(less40))              //тру, если хотябы один элемент удовлетворяет
lg(array.sort())                    //сортировка

import state from "./patterns/state"
import fabricMethod from "./patterns/fabric-method"
import singleton from "./patterns/singleton"
import abstractFactory from "./patterns/abstract-factory"
import builder from "./patterns/builder"
import decorator from "./patterns/decorator"

state()
fabricMethod()
singleton()
abstractFactory()
builder()
decorator()

import { Calculator } from "./decorators"
const calculator = new Calculator()
calculator.add(1, 2)

import eventEmitters from "./event-emitters"
eventEmitters()

//import fse from "./fs"
//fse()

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1))
// }) 

// promise.then((result) => {
//     lg(result)
// }, (reason) => {
//     lg(reason)
// })