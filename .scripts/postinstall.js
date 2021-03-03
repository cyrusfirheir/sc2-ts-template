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
		const p = join(__dirname, dir);
		try {
			await access(p);
		} catch (ex) {
			await mkdir(p);
			console.log(`"${p}" created...`);
		}
	}

})();