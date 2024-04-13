const express = require("express")
const app = express()

// クライアントから送信されたデータを解析し、req.bodyオブジェクトとしてアクセスできるようにする
app.use(express.urlencoded({ extended: true }))

// テンプレートエンジンにEJS使用するように設定
app.set("view engine", "ejs")

// publicフォルダ内のファイルを、を静的ファイル（画像、CSSファイル、JavaScriptファイルなど）として扱うよう設定
app.use("/public", express.static("public"))

// ルーティングを読み込む
const routers = require("./routes")
app.use(routers)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

