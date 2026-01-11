import { Component, For, createResource, Show } from 'solid-js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


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


const API_URL = import.meta.env.VITE_API_URL;

async function fetchProjects(): Promise<Project[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    const data: ApiProject[] = await response.json();

    return data.map(project => ({
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
}



const App: Component = () => {
    const [projects] = createResource(fetchProjects);

    return (
        <div class="container">
            <header>
                <div class="header-content">
                    <div class="header-left">
                        <h1 class="name">Andrew Guest</h1>
                        <p class="title">Software Developer</p>
                        <p class="bio">
                            Hey there! I'm Andrew, a software developer who loves building web applications.
                            I primarily work with <strong>Python</strong>, but I'm always expanding my skillset.
                            Currently learning <strong>Go</strong> and <strong>SolidJS</strong>.
                        </p>
                        <div class="tech-stack">
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">Go</span>
                            <span className="tech-badge">SolidJS</span>
                            <span className="tech-badge">FastAPI</span>
                            <span className="tech-badge">HTMX</span>
                            <span className="tech-badge">Alpine.js</span>
                        </div>
                    </div>
                    <div class="header-right">
                        <a href="https://github.com/andrewguest" class="social-link" target="_blank" rel="noopener" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="mailto:contact@aguest.me" class="social-link" title="Email">
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
                    <Show
                        when={!projects.loading && !projects.error}
                        fallback={
                            <div style="text-align: center; padding: 4rem 0; color: var(--light-gray);">
                                {projects.loading ? (
                                    <>
                                        <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                                        <p>Loading projects...</p>
                                    </>
                                ) : projects.error ? (
                                    <>
                                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent);"></i>
                                        <p>Failed to load projects. Please try again later.</p>
                                    </>
                                ) : null}
                            </div>
                        }
                    >
                        <For each={projects()}>
                            {(project) => (
                                <article class="project-card">
                                    <div class="project-header">
                                        <h3 class="project-title">{project.title}</h3>
                                        <div class="project-links">
                                            <For each={project.githubUrls}>
                                                {(repoUrl) => (
                                                    <a href={repoUrl} className="project-link" target="_blank"
                                                       rel="noopener" title="View Repository">
                                                        <i className={project.repoIcon}></i>
                                                    </a>
                                                )}
                                            </For>
                                            <a href={project.liveUrl} class="project-link" target="_blank" rel="noopener" title="Visit site">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <p class="project-description">
                                        {project.description}
                                    </p>
                                    <div class="tech-stack-label">Tech Stack</div>
                                    <div className="project-tech">
                                        <div className="tech-row">
                                            <span className="tech-category">Frontend language:</span>
                                            <span className="tech-items">{project.techStack.frontend_lang}</span>
                                        </div>
                                        <div className="tech-row">
                                            <span className="tech-category">Frontend framework:</span>
                                            <span className="tech-items">{project.techStack.frontend_framework}</span>
                                        </div>
                                        <div className="tech-row">
                                            <span className="tech-category">Backend language:</span>
                                            <span className="tech-items">{project.techStack.backend_lang}</span>
                                        </div>
                                        <div className="tech-row">
                                            <span className="tech-category">Backend framework:</span>
                                            <span className="tech-items">{project.techStack.backend_framework}</span>
                                        </div>
                                        <div className="tech-row">
                                            <span className="tech-category">Database:</span>
                                            <span className="tech-items">{project.techStack.database}</span>
                                        </div>
                                    </div>
                                </article>
                            )}
                        </For>
                    </Show>
                </div>
            </main>

            <footer>
                <p>Feel free to try out these projects, but please don't abuse them.</p>
                <p>Built with <i class="fas fa-heart" style="color: var(--accent);"></i> by Andrew Guest</p>
            </footer>
        </div>
    );
};

export default App;
