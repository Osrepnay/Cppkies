import { Cppkies as CppkiesType } from "./gameType"

//The *main* variable
const master: CppkiesType = {
	hooks: {},
	iconLink: "",
	buildingLink: "",
	buildingHooks: {},
	buildingHooksById: [],
	customBuildings: [],
	customUpgrades: [],
	customTiers: [],
	save: null,
	onLoad: [],
	Building: null,
	Upgrade: null,
	TieredUpgrade: null,
	Tier: null,
	HeavenlyUpgrade: null,
	injectCode: null,
	DEFAULT_ONBUY: null,
	DEFAULT_CPS: null,
	icons: {
		relinkColumn: null,
		relinkRow: null,
	},
}
export default master
