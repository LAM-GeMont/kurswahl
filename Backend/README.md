# REST API

## ESLint
Mit ESLint wird sichergestellt, dass der Code-Stil gleich ist. Für die Kontrolle, ob der
bereits geschriebene Code den Vorgaben entspricht führe den folgenden Befehl aus: `npm run lint`.
Wenn alle Vorgaben eingehalten wurden, steht nach dem Ausführen des Befehls 'Everything looks ok!'
in der Konsole. Ansonsten werden Fehler ausgegeben, welche die Stelle des Stil Verstoßes angeben.

## Ordnerstruktur
```
Projekt
│   index.js
│   package.json
│   .eslintrc.json
│   README.md
│
└───API
│   │   index.js
│   │
│   └───Modul 1
│   │   │   index.js
│   │   │   modul_funktion.js
│   │   │   ...
│   │   
│   └───Modul 2
│   │   │   index.js
│   │   │   modul_funktion.js
│   │   │   ...
│   │
│   ...
│
└───DB
    │   index.js
    │   connect.js
    └───Schema
        │   index.js
        └───Schema 1
        │   schema_1.js
        │
        └───Schema 2
        │   schema_2.js
        ...
```
