import { formPath, lg } from "../logger"

export const array = () => {
    const string: string = "Hello, this is a test string"
    const string2: string = "This is the second string"
    const array: number[] = [1, 5, 2, 3, 7, 55]
    const less40 = (value: number): boolean => value < 40

    lg(formPath(__filename), Array.from(string))              //формирует массив из строки
    lg(formPath(__filename), Array.of(string, string2))       //создает массив из элементов
    lg(formPath(__filename), array.at(1))                     //элемент массива по индексу
    lg(formPath(__filename), array.concat(array))             //соединяет два массива
    lg(formPath(__filename), array.entries())                 //перегоняет массив в ключ/значение пару
    lg(formPath(__filename), array.every(less40))             //проверяет все элементы по условию
    lg(formPath(__filename), array.filter(less40))            //фильтрует массив по условию
    lg(formPath(__filename), array.find(less40))              //ищет первый подходящий по условию
    lg(formPath(__filename), array.findIndex(less40))         //тоже самое, только индекс
    lg(formPath(__filename), [...array, array].flat())        //раскумаривает элементы подмассива в основной
    lg(formPath(__filename), array.join(""))                  //склеивает в строку
    lg(formPath(__filename), array.keys())                    //ключи массива
    lg(formPath(__filename), array.map(less40))               //новый массив из существующего
    lg(formPath(__filename), array.pop())                     //убирает из конца массива и возвращает
    lg(formPath(__filename), array.push(9))                   //добавляет в конец и возвращает новую длинну
    lg(formPath(__filename), array.reverse())                 //инвертирует
    lg(formPath(__filename), array.shift())                   //убирает из начала массива и возвращает убранное
    lg(formPath(__filename), array.unshift())                 //добавляет в начало массива и возвращает длинну
    lg(formPath(__filename), array.some(less40))              //тру, если хотябы один элемент удовлетворяет
    lg(formPath(__filename), array.sort())                    //сортировка
}