import type { PageLoad } from './$types';

import type { ApiProject, Project } from '$lib/types'


const API_URL = import.meta.env.VITE_API_URL;


export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(API_URL);

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


