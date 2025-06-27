#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# 加入 CNAME（確保部署會包含它）
echo 'www.ejclearhero.com' > CNAME

# 部署到自定義網域
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'

# 將打包結果推送至 gh-pages 分支（注意：這裡使用 HTTPS 模式）
git push -f https://github.com/ejclearhero/ejwebsite.git main:gh-pages

cd -