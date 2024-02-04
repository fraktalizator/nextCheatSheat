import * as fs from "fs";
import path from "node:path";
import exp from "node:constants";


function getAllTutorialFileNames(){
    const tutorialDirectory = path.join(process.cwd(), './src/app/tutorial/')
    return fs.readdirSync(tutorialDirectory);
}
function readFileData(path:string):string{
    try{
        return fs.readFileSync(path, {encoding: 'utf8'});
    }catch (e){
        //console.log(e)
        return ""
    }
}
export function getAllTutorialPages() {
    const filenames = getAllTutorialFileNames()
    return filenames.filter(file => !file.includes("."))
}

export function getTutorialDescription(name:string):string{
    const descriptionFilePath = path.join(process.cwd(), `./src/app/tutorial/${name}/description.txt`)
    let data = readFileData(descriptionFilePath)
    return data !== "" ? data : "No description for that path wos found."
}

// export function getValues<T>(obj:T):string[] {
//     const keys = Object.keys(obj) as Array<keyof typeof  obj>;
//     const values = keys.map(key => obj[key]) as string[];
//     const val = Object.values(obj) as string[]
//     return values;
// }

export function getValues<T>(obj:T):string[] {
    return  Object.values(obj as any) as string[]
}