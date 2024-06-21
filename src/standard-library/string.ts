import { formPath, lg } from "../logger"

export const string = () => {
    const string: string = "Hello, this is a test string"
    const string2: string = "This is the second string"

    lg(formPath(__filename), string.toLowerCase())            //нижний регистр
    lg(formPath(__filename), string.toUpperCase())            //верхний регистр
    lg(formPath(__filename), string.concat(string2))          //слепить строки
    lg(formPath(__filename), string.split(" "))               //в массив с разделителем
    lg(formPath(__filename), string.repeat(2))                //повторить
    lg(formPath(__filename), string.charAt(2))                //символ по индексу
    lg(formPath(__filename), string.includes("test"))         //булен включает или нет
    lg(formPath(__filename), string.indexOf("is"))            //индекс первого вхождения подстроки
    lg(formPath(__filename), string.lastIndexOf("is"))        //индекс последнего вхождения подстроки
    lg(formPath(__filename), string.endsWith("ing"))          //заканчивается этим
    lg(formPath(__filename), string.startsWith("He"))         //начинается с этого
    lg(formPath(__filename), string.search("th"))             //индекс начала совпадения
    lg(formPath(__filename), string.slice(1, 5))              //подстрока из строки
    lg(formPath(__filename), string.substring(5, 1))          //тоже самое
    lg(formPath(__filename), string.replace(/is/g, "IS"))     //создание новой строки из строки с заменой
    lg(formPath(__filename), string.padEnd(40, "d"))          //добавить в конец символов пока длинна не станет равной
    lg(formPath(__filename), string.padStart(40, "d"))        //в начало
    lg(formPath(__filename), `     ${string} `.trim())        //убрать пробелы везде
}