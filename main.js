import { discoverGateway } from "node-tradfri-client";
import { TradfriClient, Accessory, AccessoryTypes } from "node-tradfri-client";

const result = await discoverGateway();

// connect
const tradfri = new TradfriClient("gw-abcdef012345");
try {
    await tradfri.connect(identity, psk);
} catch (e) {
    // handle error - see below for details
}
