import type { ServerLoadEvent } from "@sveltejs/kit"
import { error } from "@sveltejs/kit"

export async function load({ params, fetch }: ServerLoadEvent) {
	const category = params.category

	if (!category) {
		throw error(404, "Category not found")
	}

	try {
		const response = await fetch("/api/posts")
		const allPosts: Post[] = await response.json()

		// Filter posts by category
		const filteredPosts = allPosts.filter((post) =>
			post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
		)

		return {
			category,
			posts: filteredPosts,
		}
	} catch (e) {
		throw error(500, "Failed to load posts")
	}
}

