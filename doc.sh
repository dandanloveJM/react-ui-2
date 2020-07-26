yarn doc
cd doc
git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:dandanloveJM/react-ui-display.git
git push -f git@github.com:dandanloveJM/react-ui-display.git master:gh-pages