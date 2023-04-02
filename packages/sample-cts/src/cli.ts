import {resolve} from 'path';

    import(resolve(__dirname, 'index.js'))
        .then((main: () => Promise<void>) => {
            if (typeof main !== 'function') {
                console.log('main not a fn')
            }
            console.log('exec main fn')
            return main();
        }).finally(() => console.log('END'));


