yarn doc
cd doc || exit
git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:dandanloveJM/react-ui-display.git
git push -f git@github.com:dandanloveJM/react-ui-display.git master:gh-pages

git remote add gitee git@gitee.com:dandan0513/react-ui-display.git
git push -f git@gitee.com:dandan0513/react-ui-display.git master:gh-pages