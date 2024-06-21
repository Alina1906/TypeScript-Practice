import { formPath, lg } from "../logger"
import fse from "fs-extra"
import path from "path"

export const fsExtra = async () => {
    try {
        const name = 'test.txt'
        const content = "THIS IS A STRING"
        await fse.writeFile(name, content)

        const result = await fse.readFile(name)

        lg(formPath(__filename), result.toString())
        lg(formPath(__filename), process.cwd())
        lg(formPath(__filename), path.resolve(name))
        lg(formPath(__filename), __dirname)
        lg(formPath(__filename), __filename)
        lg(formPath(__filename), path.basename(path.dirname(__filename)))

        const root = path.basename(path.dirname(path.dirname(__filename)))
        const part = path.basename(path.dirname(__filename))
        const topic = path.basename(__filename, path.extname(__filename))

        lg(formPath(__filename), path.join(root, part, topic))
    } catch (err) {
        console.log(err)
    }
}