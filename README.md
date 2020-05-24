# Bluechip Utility Package

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
import {validateRequiredProperty} from 'bluechip-utils/validators'

```

Go head and use

```
try{
    validateRequiredProperty("name of key", itemTocheck);
}catch(error){
    //Handle case for exception
}



```
