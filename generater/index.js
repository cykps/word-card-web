const fs = require('fs')
const path = require('path')

function buildTree(dirPath) {
    const files = fs.readdirSync(dirPath)

    const result = {}
    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const fullPath = path.join(dirPath, file)

        if (fs.statSync(fullPath).isDirectory()) {
            // サブディレクトリを再帰的に処理する
            result[file] = buildTree(fullPath)
        } else {
            // ファイルを JSON オブジェクトに追加する
            if (file == "data.json") {
                const jsonData = fs.readFileSync(fullPath, 'utf-8');
                const data = JSON.parse(jsonData);
                result[file] = data[0].property.name;
            }
        }
    }

    return result
}

const dirPath = '/home/cykps/ws/dev/web/word-card-web/1-grade'

const tree = buildTree(dirPath)

fs.writeFileSync('tree.json', JSON.stringify(tree, null, 2))
