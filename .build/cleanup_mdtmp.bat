chcp 65001 >nul

@echo off
echo Suppression des fichiers .mdtmp en cours...

cd ..

for /r %%f in (*.mdtmp) do (
    echo Supprime : %%f
    del "%%f"
)

echo Terminé.
