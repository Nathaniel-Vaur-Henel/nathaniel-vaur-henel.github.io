chcp 65001 >nul

@echo off
echo Re génération de tous aides mémoire PDF en cours...


python .build/md-to-pdf-1col.py devento\angular\00.bases\angular_bases_aide-mémoire.markdown
.build\md-to-pdf-1col.py devento\angular\10.rxjs\angular_rxjs_aide-mémoire.markdown
.build\md-to-pdf-2col.py devento\java\java-11-17\java11_17_aide-mémoire.markdown
.build\md-to-pdf-1col.py devento\transverse\cases\casses_aide-mémoire.markdown
.build\md-to-pdf-1col.py devento\transverse\kafka\kafka_aide-mémoire.markdown
.build\md-to-pdf-2col.py devento\transverse\regex\regex_aide-mémoire.markdown



echo Terminé.
