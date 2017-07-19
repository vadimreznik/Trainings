## Installation

```javascript
npm install -g typescript
```

## Using

```javascript
tsc example.ts
```


## Configuration

### tsconfig.json

#### Properties
* **CompilerOptions**
	* *allowJs*  
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Разрешить компилировать JS файлы

	* *allowSyntheticDefaultImports*  
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `module === "system"`  
		***Описание*** : Разрешить импорт из модулей не использующих `default`
		
	* *allowUnreachableCode*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не сообщать об ошибках o недостижимом коде
		
	* *allowUnusedLabels*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не сообщать об ошибках o неиспользуемых переменных
		
	* *alwaysStrict*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Парсит файл в `strict mode` и вызывает `use strict` для каждого файла
		
	* *baseUrl*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `''`  
		***Описание*** : Базовая директория
		
	* *charset*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `"utf8"`  
		***Описание*** : Кодировка файлов
		
	* *checkJs*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Сообщать об ошибках в JS файлах. Используется вместе с `allowJS`

	* *declaration*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Генерирует [.d.ts](https://metanit.com/web/typescript/4.1.php) файл
		
	* *declarationDir*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `''`  
		***Описание*** : Директория для генерации декларативных файлов 
		
	* *diagnostics*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Показать информацию о диагностике
		
	* *disableSizeLimit*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Отключить ограничение размера в JavaScript проекте
		
	* *downlevelIteration*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Обеспечить полную поддержку итераций `for...of`, `spread` и деструкции при `target == ES5` или `target == ES3`
		
	* *emitBOM*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : установить в начале выходных файлов знак порядка байтов UTF-8 (BOM).
		
	* *forceConsistentCasingInFileNames*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Запретить несогласованные ссылки на один и тот же файл
		
	* *importHelpers*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Импорт хелперов из `tslib` (`__extends, __rest`)
		
	* *inlineSourceMap*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Вставлять `sourcemap` в однин файл
		
	* *inlineSources*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Установить `sourcemap` в одном файле вместе с исходным кодом; Требуется установить `inlineSourceMap` или `sourceMap`.
		
	* *isolatedModules*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Файл как отдельный модуль
		
	* *jsx*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `"Preserve"`  
		***Описание*** : Поддержка `JSX` in `.tsx` файлах: "React" или "Preserve"
		
	* *jsxFactory*    
		
		***Тип*** : `false`  
		***Значение по умолчанию*** : `"React.createElement"`  
		***Описание*** : Указать `JSX factory function`, используется с `target=react` (e.g. React.createElement or h)
		
	* *lib*    
		
		***Тип*** : `string[]`  
		***Значение по умолчанию*** : `target=ES5: DOM,ES5,ScriptHost`, `target=ES6: DOM,ES6,DOM.Iterable,ScriptHost`  
		***Описание*** : Указать список библиотек, которые должны быть включены в компиляцию
		
	* *mapRoot*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `''`  
		***Описание*** : Указывает место, где отладчик должен найти `map` файлы вместо сгенерированных. Используйте этот флаг, если файлы `.map` будут расположены во время выполнения в другом месте, кроме файлов `.js`. Указанное местоположение будет встроено в `sourceMap`
		
	* *maxNodeModuleJsDepth*    
		
		***Тип*** : `number`  
		***Значение по умолчанию*** : `0`  
		***Описание*** : Максимальная глубина для поиска зависимостей в `node_modules`
		
	* *module*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `target === "ES6" ? "ES6" : "CommonJS"`  
		***Описание*** : Указывает как будут генерироваться модули. Только `AMD` и `System` могут использоваться с `outFile`. Значения `ES6` и `ES2015` могут использоваться с `target=ES5` и ниже
		
	* *moduleResolution*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `module === "AMD" | "System" | "ES6" ? "Classic" : "Node"`  
		***Описание*** : Указывает тип модуля
		
	* *noEmit*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не генерирует `outputs`
		
	* *noEmitHelpers*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не генерирует функции хелперы
		
	* *noEmitOnError*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не генерирует файлы, если были ошибки
		
	* *noFallthroughCasesInSwitch*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Сообщать об ошибках в инструкции switch.

		
	* *noImplicitAny*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Вызывает ошибку, если используется тип `any`
		
	* *noImplicitReturns*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Сообщает об ошибке, если функция не всегда возвращает значение

		
	* *noImplicitThis*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Вызывает ошибку в выражениии с `this`, если используется тип `any`
		
	* *noImplicitUseStrict*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не использовать `use strict`
		
	* *noLib*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не включает файл с библиотеками "по умолчанию"
		
	* *noResolve*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не добавлять ссылки с `///`
		
	* *noStrictGenericChecks*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Оключает строгую проверку `generic signatures` в типах функции
		
	* *noUnusedParameters*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Сообщает об ошибке о неиспользуемых параметрах
		
	* *outDir*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `''`  
		***Описание*** : Перенапраляет структуру проекта в каталог 
		
	* *outFile*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `''`  
		***Описание*** : Объеденяет файлы в один файл
		
	* *paths*    
		
		***Тип*** : `Object`  
		***Значение по умолчанию*** : `''`  
		***Описание*** : Список путей для модулей относительно `baseUrl`
		
	* *preserveConstEnums*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Не удаляет `const enum` в сгенерированном коде
		
	* *removeComments*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`    
		***Описание*** : Удаляет все комментарии, кроме комментариев в заголовке copyright, начиная с `/ *!`
		
	* *rootDir*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : '""' 
		***Описание*** : Задает корневой каталог входных файлов. Для структуры каталогов используйте `outDir`

		
	* *rootDirs*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : false  
		***Описание*** : Список корневых каталогов, которые объединяют контент представленный структурой проекта
		
	* *skipLibCheck*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`    
		***Описание*** : Пропустить проверку библиотек во всех фалах декларации
		
	* *sourceMap*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : "``"  
		***Описание*** : Генерирует `.map` файл 
		
	* *sourceRoot*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : "``"  
		***Описание*** : Определяет где отладчик должен найти файлы `TypeScript` вместо исходных местоположений. Используйте этот флаг, если источники будут находиться во время выполнения в другом месте, чем во время разработки. Указанное местоположение будет встроено в `sourceMap` для направления отладчика, где будут располагаться исходные файлы.

		
	* *strict*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Разрешает все опции строгой проверки типов (`noImplicitAny`, `noImplicitThis`, `alwaysStrict`, `strictNullChecks`)
		
	* *strictNullChecks*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`    
		***Описание*** : `null` и `undefined` не будут принадлежать ни одному из типов и могут присваиваться таким же типам или `any` 
		
	* *suppressExcessPropertyErrors*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Подавляет избыточные проверки свойств для объектных литералов.
		
	* *suppressImplicitAnyIndexErrors*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Подвляет `noImplicitAny` ошибки
		
	* *target*    
		
		***Тип*** : `string`  
		***Значение по умолчанию*** : `ES3`  
		***Описание*** : Указвает версию `ECMAScript` 
		
	* *traceResolution*    
		
		***Тип*** : `boolean`  
		***Значение по умолчанию*** : `false`  
		***Описание*** : Выводит логи для модулей
		
	* *types*    
		
		***Тип*** : `string[]`  
		***Значение по умолчанию*** : "``"  
		***Описание*** : Список имен определений типов
		
	* *typeRoots*    
		
		***Тип*** : `string[]`  
		***Значение по умолчанию*** : "``"  
		***Описание*** : Список папок для включения типов
		
		
* **Files**
* **Include**
* **Exclude**
* **Extends**
* **compileOnSave**