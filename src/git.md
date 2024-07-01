# Git management
### git status
### git branch
### git checkout
### git merge
### git pull
### git push
### git commit

### git stash
### git tag
### git remote
### git archive
### git submodule
### git switch
### git fetch
### git rebase
### git diff
### git show
### git mv
### git mergetool

### git reset
* `git reset --soft HEAD~1` - удалить последний коммит, но сохранить разницу в индексе
* `git reset HEAD~1` - удалить последний коммит, не сохранять в индекс, но сохранить в проекте (unstaged)
* `git reset --hard HEAD~1` - безвозвратно удалить последний коммит

### git log
* `git log` - показывает историю коммитов
* `git reflog` - тоже самое, только компактнее

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