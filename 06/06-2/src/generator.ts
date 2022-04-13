export function* generator() {
	console.log("Generaotr Started..")

	let value = 1
	while (value < 4)	yield value++
	console.log("Generator Finished..")
}
