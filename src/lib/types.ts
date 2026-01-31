interface ApiProject {
	_id: string;
	name: string;
	description: string;
	frontend_lang: string;
	frontend_framework: string;
	backend_lang: string;
	backend_framework: string;
	database: string;
	url: string;
	github_repos: string[];
}

interface Project {
	title: string;
	description: string;
	techStack: {
		frontend_lang: string;
		frontend_framework: string;
		backend_lang: string;
		backend_framework: string;
		database: string;
	};
	githubUrls: string[];
	liveUrl: string;
	repoIcon: string;
}

export type {ApiProject, Project};