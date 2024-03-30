/* global window */
import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import { uneval } from 'devalue'

/**
 * Tracks storage both in `localStorage` and in svelte's `writable` stores
 *   Usage: `const name = storable('name', 'jimmy')`
 * @param {string} key				- `localStorage` key
 * @param {any} value				- default value (loads value first from `localStorage` if present)
 * @param {Function} [fn]			- handed off to `writable`
 */

export const storable = (key, value, fn) => {

	// quick guard against server
	if (!browser) { return writable(value, fn) }

	key = `arx.store.${key}`
	if (window.localStorage[key]) {
		value = (0, eval)('(' + window.localStorage[key] + ')')
	}

	const store = writable(value, fn)
	store.subscribe(value => {
		if (value === undefined) {
			window.localStorage.removeItem(key)
		} else {
			window.localStorage[key] = uneval(value)
		}
	})

	store.remove = () => store.set(undefined)

	return store
}
