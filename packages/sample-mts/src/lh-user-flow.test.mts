import {startFlowCustom} from "./lh-user-flow.mjs";
import { execSync } from "child_process";

describe('lh-user-flow', () => {
    it('should run', async () => {

        execSync('node lib/cli.mjs');

        // const res = await startFlowCustom();
        console.log('sanity Check !3');
        expect(1).toBe(1);
    }, 50000);

})
