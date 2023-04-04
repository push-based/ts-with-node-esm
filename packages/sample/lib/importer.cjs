"use strict";
/**
 * @file `importer.cjs`
 *
 * From a require-style Node script, import cjs and mjs modules.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import a module by `require()`ing it. If that results in
 * an error, return the error code.
 */
/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */
(async function () {
    console.log({
        title: 'Importing into a CommonJS module',
        // CJS<-CJS and MJS<-CJS are equivalent
        defaultCjsExport: requireModule('./exporter.cjs'),
        namedCjsExport: requireModule('./exporter.cjs', 'namedCjsExport'),
        // Cannot `require` an ESM module
        defaultMjsExportUsingRequire: requireModule('./exporter.mjs'),
        namedMjsExportUsingRequire: requireModule('./exporter.mjs', 'namedMjsExport'),
        defaultMjsExport: (await Promise.resolve().then(() => require('./exporter.mjs'))).default,
        namedMjsExport: (await Promise.resolve().then(() => require('./exporter.mjs'))).namedMjsExport,
    });
})();
(async function () {
    console.log({
        title: 'Importing lighthouse into a CommonJS module',
        defaultMjsExport: (await Promise.resolve().then(() => require('lighthouse'))).default,
        namedMjsExport: (await Promise.resolve().then(() => require('lighthouse'))).startFlow,
    });
})();
