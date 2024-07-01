# Git management

### git branch
### git checkout
### git merge
### git mergetool
### git log
### git stash
### git tag
### git pull
### git push
### git remote
### git archive
### git submodule
### git switch
### git fetch
### git commit
### git rebase
### git diff
### git status
### git show
### git mv

### git log
* `git log` - показывает историю коммитов

## Добавление/Удаление/Восстановление
### git add
* `git add .` - добавить все в индекс
* `git add file1.txt` - добавить конкретный файл в индекс
* `git add *.txt` - добавить файлы с конкретным расширением в индекс

### git rm
* `git rm a.txt` - добавить в индекс информацию, что удалено, и удалить из директории
* `git rm --cached a.txt` - добавить в индекс информацию, что удалено, но не удалять из директории

## Новые фичи
### git restore
* `git restore -S a.txt` - убрать из индекса
* `git restore -W a.txt` - вернуть состояние директории к последнему комиту