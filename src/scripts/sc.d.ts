/**
 * Define custom type defs in here.
 */
declare module "twine-sugarcube" {
	export interface SugarCubeSetupObject {
		[key: string]: unknown;
	}

	export interface SugarCubeStoryVariables {
		[key: string]: unknown;
	}

	export interface SugarCubeTemporaryVariables {
		[key: string]: unknown;
	}
	
	export interface SugarCubeSettingVariables {
		[key: string]: unknown;
	}
}

export {};