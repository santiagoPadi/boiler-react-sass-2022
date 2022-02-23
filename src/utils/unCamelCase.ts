export function unCamelCase(value: string) {
	return (
		value
			.replace(/([A-Z])/g, ' $1')
			// uppercase the first character
			.replace(/^./, function(str) {
				return str.toUpperCase()
			})
	)
}

export function camelize(value: string) {
	if (value !== null && value !== undefined) {
		const _value = value.toLowerCase()
		return _value
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase()
			})
			.replace(/\s+/g, '')
	}
	return value
}
