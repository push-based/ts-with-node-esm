const path = require('path')

export async function execute({
                           argv: [script, ...argv],
                           argvHead = [],
                           cwd = process.cwd(),
                           ...rest
                       }: {
    argv: string[],
    argvHead?: string[],
    cwd?: string
}) {
    const {default: main} = await import(
        path.resolve(cwd, script)
        )
    console.log("main: ", main);
    if (typeof main !== 'function') {
        console.log("main !== 'function'");
        return 1;
    }

    const result = await main({
        argv,
        argvHead: [...argvHead, script],
        cwd,
        ...rest,
    })

    switch (result) {
        case true:
            return 0;
        case false:
            return 1;
        case undefined:
            return 0;
        default:
            if (typeof result === 'number') {
                return result
            }
            else {
                throw new TypeError(`Unepected program result value: ${result}`)
            }
    }
}

