/**
 * @file `importer.mjs`
 *
 * An ESM module that imports stuff
 */

import defaultCjsExport, { namedCjsExport } from './exporter.cjs';
import defaultMjsExport, { namedMjsExport } from './exporter.mjs';

console.log({
    title: 'Importing into an ESM module.',
    defaultCjsExport,
    namedCjsExport,
    defaultMjsExport,
    namedMjsExport,
});

import lighthouse, {startFlow} from "lighthouse";

console.log({
    title: 'Importing lighthouse into an ESM module.',
    lighthouse,
    startFlow,
});
