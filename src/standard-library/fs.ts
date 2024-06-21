import { lg } from "../logger"
import fse from "fs-extra"
import path from "path"

export const fsExtra = async () => {
    try {
        const name = 'test.txt'
        const content = "THIS IS A STRING \n"
        await fse.appendFile(name, content)
        await fse.appendFile(name, content)
        await fse.appendFile(name, content)

        const result = await fse.readFile(name)

        lg(result.toString())
        lg(process.cwd())
        lg(path.resolve(name))
        lg(__dirname)
        lg(__filename)
    } catch (err) {
        console.log(err)
    }
}