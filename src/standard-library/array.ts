import { lg } from "../logger"

export const array = () => {
    const string: string = "Hello, this is a test string"
    const string2: string = "This is the second string"
    const array: number[] = [1, 5, 2, 3, 7, 55]
    const less40 = (value: number): boolean => value < 40

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
}