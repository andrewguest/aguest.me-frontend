<script lang="ts">
	import type { Project} from '$lib/types';

	export let data: {
		projects: Project[];
	};
</script>


<div class="container">
	<header>
		<div class="header-content">
			<div class="header-left">
				<h1 class="name">Andrew Guest</h1>
				<p class="title">Software Developer</p>
				<p class="bio">
					Hey there! I'm Andrew, a software developer who loves building web
					applications. I primarily work with <strong>Python</strong>, but I'm
					always expanding my skillset. Currently learning{' '}
					<strong>Go</strong> and <strong>SvelteKit</strong>.
				</p>
			</div>

			<div class="header-right">
				<a
					href="https://codeberg.org/andrewguest"
					class="social-link"
					target="_blank"
					rel="noopener"
					title="Codeberg"
				>
					<i class="fab fa-github"></i>
				</a>

				<a
					href="mailto:andrew@aguest.me"
					class="social-link"
					title="Email"
				>
					<i class="fas fa-envelope"></i>
				</a>
			</div>
		</div>
	</header>

	<main>
		<div class="section-header">
			<i class="fas fa-rocket"></i>
			<h2>Projects</h2>
		</div>

		<div class="projects-grid">
			{#each data.projects as project}
				<article class="project-card">
					<div class="project-header">
						<h3 class="project-title">{project.title}</h3>

						<div class="project-links">
							{#each project.githubUrls as repoUrl}
								<a
									href={repoUrl}
									class="project-link"
									target="_blank"
									rel="noopener"
									title="View Repository"
								>
									<i class={project.repoIcon}></i>
								</a>
							{/each}

							<a
								href={project.liveUrl}
								class="project-link"
								target="_blank"
								rel="noopener"
								title="Visit site"
							>
								<i class="fas fa-external-link-alt"></i>
							</a>
						</div>
					</div>

					<p class="project-description">
						{project.description}
					</p>

					<div class="project-tech-grid">
						<div class="tech-col">
							<div class="tech-category">Frontend</div>
							<div class="tech-items">
								{project.techStack.frontend_framework}
							</div>
						</div>

						<div class="tech-col">
							<div class="tech-category">Backend</div>
							<div class="tech-items">
								{project.techStack.backend_framework}
							</div>
						</div>

						<div class="tech-col">
							<div class="tech-category">Other</div>
							<div class="tech-items">
								{project.techStack.database}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</main>

	<footer>
		<p>
			Feel free to try out these projects, but please don't abuse them.
		</p>
	</footer>
</div>