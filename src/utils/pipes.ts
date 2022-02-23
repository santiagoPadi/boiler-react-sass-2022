/* eslint-disable no-unneeded-ternary */

import i18next from 'i18next'

/* eslint-disable no-unused-vars */
const normalizeCurrency = (input: number | string) =>
	input
		? `${input}`
				.replace('$', '')
				.replace(/[.]/g, '')
				.replace(/[,]/g, '.')
		: input

const formatCurrency = (input: any, empty = '', decimals = 0) => {
	const _decimals = decimals ? decimals : 0
	if (!input) {
		return empty
	}

	const value = typeof input === 'string' ? normalizeCurrency(input) : input.toFixed(_decimals)
	const splitedValue = `${value}`.split('.')
	const integer = `${i18next.t('labels.currencySymbol', { defaultValue: '$' })}${
		splitedValue[0]
	}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	const decimal = splitedValue[1] ? (splitedValue[1] !== '0' ? `,${splitedValue[1]}` : '') : ''

	return `${integer}${decimal}`
}

export default formatCurrency
