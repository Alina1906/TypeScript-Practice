type listItem = {
    name: string,
    id: number,
    parent_id: number | null
}

type categoryItem = listItem & {
    children?: Map<number, categoryItem>
}

export default function() {
    const data: listItem[] = [
        { "name": "Блузы", "id": 493, "parent_id": 71026 },
        { "name": "Батон нарезной", "id": 4171, "parent_id": 15601 },
        { "name": "Выпечка", "id": 8430, "parent_id": 88628 },
        { "name": "Молоко", "id": 13722, "parent_id": 71300 },
        { "name": "Хлебобулочные изделия", "id": 15601, "parent_id": 8430 },
        { "name": "Мужская", "id": 18914, "parent_id": 59566 },
        { "name": "Юбки", "id": 28471, "parent_id": 71026 },
        { "name": "Рубашки", "id": 28950, "parent_id": 18914 },
        { "name": "Рулет с брусничным вареньем", "id": 35612, "parent_id": 72045 },
        { "name": "Брюки", "id": 41281, "parent_id": 18914 },
        { "name": "Одежда", "id": 59566, "parent_id": 93477 },
        { "name": "Хлеб столичный", "id": 65043, "parent_id": 15601 },
        { "name": "Женская", "id": 71026, "parent_id": 59566 },
        { "name": "Молочные", "id": 71300, "parent_id": 88628 },
        { "name": "Сладости", "id": 72045, "parent_id": 8430 },
        { "name": "Кефир", "id": 72901, "parent_id": 71300 },
        { "name": "Йогурт", "id": 84732, "parent_id": 71300 },
        { "name": "Пирожное картошка", "id": 88623, "parent_id": 72045 },
        { "name": "Продукты", "id": 88628, "parent_id": 93477 },
        { "name": "Каталог", "id": 93477, "parent_id": null }
    ]

    function createTree(data: listItem[], parentId: number | null): Map<number, categoryItem> {
        let result: Map<number, categoryItem> = new Map()

        const filtered = data.filter(item => item.parent_id === parentId)

        filtered.forEach(item => {
            result.set(item.id, {
                ...item,
                children: createTree(data, item.id)
            })
        })

        return result
    }

    return createTree(data, null)
}