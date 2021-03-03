const { mkdir, access } = require("fs/promises");
const { join } = require("path");

const dirs = [
	"dist",
	"src/__compiled",
	"src/modules",
	"src/styles"
];

(async () => {

	for (const dir of dirs) {
		const p = join(process.cwd(), dir);
		try {
			await access(p);
		} catch (ex) {
			console.log(`Creating "${p}"...`);
			await mkdir(p);
		}
	}

})();