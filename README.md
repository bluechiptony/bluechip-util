# Bluechip Util Package

## The Why

Just a simple utility package for Javascript/TypeScript projects
Hope it helps with:

- Validation
- Simple **"me-defined"** custom Exceptions

## How to use

Install the package

```
npm install bluechip-utils

```

Import the set you need to use

```
import * as BluechipUtils from 'bluechip-utils'

```

or

```
import {isArrayContaining} from 'bluechip-utils/validators'

```

Go head and use

```
let check:boolean = isArrayContaining(array, itemTocheck);

if(check){
    //do something
}else{
    //fo domething else
}


```
