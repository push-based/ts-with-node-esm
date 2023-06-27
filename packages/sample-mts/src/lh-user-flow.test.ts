import {startFlowCustom} from "./lh-user-flow.js";
import { execSync } from "child_process";

describe('lh-user-flow', () => {
    it('should run', async () => {
        await startFlowCustom()
        execSync('node lib/cli.js olo');

        // const res = await startFlowCustom();
        console.log('sanity Check !3');
        expect(1).toBe(1);
    }, 50000);

})
