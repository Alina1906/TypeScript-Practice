import { lg } from ".."

interface CargoStore {
    sayHello(): boolean
}

class MetalCargoStore implements CargoStore {
    public sayHello(): boolean {
        lg("I'm a metal store!")
        return true
    }
}

class OilCargoStore implements CargoStore {
    public sayHello(): boolean {
        lg("I'm an oil store!")
        return true
    }
}

interface BuildingCompany {
    createCargoStore(): CargoStore
}

class MetalBuildingCompany implements BuildingCompany {
    public createCargoStore(): CargoStore {
        return new MetalCargoStore()
    }
}

class OilBuildingCompany implements BuildingCompany {
    public createCargoStore(): CargoStore {
        return new OilCargoStore()
    }
}


export default () => {
    const MoscowMetalBuilder: BuildingCompany = new MetalBuildingCompany()
    const SokolnikiMetalStore: CargoStore = MoscowMetalBuilder.createCargoStore()
    SokolnikiMetalStore.sayHello()

    const KazanOilBuilder: BuildingCompany = new OilBuildingCompany()
    const InnopolisOilStore: CargoStore = KazanOilBuilder.createCargoStore()
    InnopolisOilStore.sayHello()
}