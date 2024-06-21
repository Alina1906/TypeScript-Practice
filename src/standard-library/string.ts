import { lg } from "../logger"

export const string = () => {
    const string: string = "Hello, this is a test string"
    const string2: string = "This is the second string"

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
}