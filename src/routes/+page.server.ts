import type { PageServerLoad } from './$types';
import type { ApiProject } from '$lib/types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ fetch }) => {
	//const apiUrl = env.API_URL;
	const apiUrl = "https://api.aguest.me"

	if (!apiUrl) {
		throw new Error('API_URL environment variable is not set');
	}

	const response = await fetch(apiUrl);

	if (!response.ok) {
		throw new Error('Failed to fetch projects');
	}

	const data: ApiProject[] = await response.json();

	const projects = data.map((project) => ({
		title: project.name,
		description: project.description,
		techStack: {
			frontend_lang: project.frontend_lang,
			frontend_framework: project.frontend_framework,
			backend_lang: project.backend_lang,
			backend_framework: project.backend_framework,
			database: project.database
		},
		githubUrls: project.github_repos,
		liveUrl: project.url,
		repoIcon: 'fas fa-code-branch'
	}));

	return {
		projects
	};
};

