export const GET = async (url) => {
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
		return { error: null, data: await res.json() }
	} catch (error) {
		return { error, data: null }
	}
}

export const POST = async (url, body = {}) => {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})
		return { error: null, data: await res.json() }
	} catch (error) {
		return { error, data: null }
	}
}

export const slug_from_path = (path, folder) =>
	path.split(`/${folder}/`)[1].split('/+page.svx')[0] ?? null
