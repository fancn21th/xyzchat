 #!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:sb

# 进入生成的文件夹
cd packages/core/storybook-static

# 如果是发布到自定义域名
echo 'xyzchat.fancn21th.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:fancn21th/xyzchat.git master

cd -
