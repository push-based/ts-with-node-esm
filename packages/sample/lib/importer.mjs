"use strict";
/**
 * @file `importer.mjs`
 *
 * An ESM module that imports stuff
 */
Object.defineProperty(exports, "__esModule", { value: true });
const exporter_cjs_1 = require("./exporter.cjs");
const exporter_mjs_1 = require("./exporter.mjs");
console.log({
    title: 'Importing into an ESM module.',
    defaultCjsExport: exporter_cjs_1.default,
    namedCjsExport: exporter_cjs_1.namedCjsExport,
    defaultMjsExport: exporter_mjs_1.default,
    namedMjsExport: exporter_mjs_1.namedMjsExport,
});
const lighthouse_1 = require("lighthouse");
console.log({
    title: 'Importing lighthouse into an ESM module.',
    lighthouse: lighthouse_1.default,
    startFlow: lighthouse_1.startFlow,
});
