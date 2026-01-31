import { P as ensure_array_like, O as attr, Q as attr_class, T as clsx, V as bind_props } from './index-CAJyh0Be.js';
import { k as escape_html } from './context-CKR25gbz.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<div class="container"><header><div class="header-content"><div class="header-left"><h1 class="name">Andrew Guest</h1> <p class="title">Software Developer</p> <p class="bio">Hey there! I'm Andrew, a software developer who loves building web
					applications. I primarily work with <strong>Python</strong>, but I'm
					always expanding my skillset. Currently learning  <strong>Go</strong> and <strong>SvelteKit</strong>.</p></div> <div class="header-right"><a href="https://codeberg.org/andrewguest" class="social-link" target="_blank" rel="noopener" title="Codeberg"><i class="fab fa-github"></i></a> <a href="mailto:andrew@aguest.me" class="social-link" title="Email"><i class="fas fa-envelope"></i></a></div></div></header> <main><div class="section-header"><i class="fas fa-rocket"></i> <h2>Projects</h2></div> <div class="projects-grid"><!--[-->`);
    const each_array = ensure_array_like(data.projects);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array[$$index_1];
      $$renderer2.push(`<article class="project-card"><div class="project-header"><h3 class="project-title">${escape_html(project.title)}</h3> <div class="project-links"><!--[-->`);
      const each_array_1 = ensure_array_like(project.githubUrls);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let repoUrl = each_array_1[$$index];
        $$renderer2.push(`<a${attr("href", repoUrl)} class="project-link" target="_blank" rel="noopener" title="View Repository"><i${attr_class(clsx(project.repoIcon))}></i></a>`);
      }
      $$renderer2.push(`<!--]--> <a${attr("href", project.liveUrl)} class="project-link" target="_blank" rel="noopener" title="Visit site"><i class="fas fa-external-link-alt"></i></a></div></div> <p class="project-description">${escape_html(project.description)}</p> <div class="project-tech-grid"><div class="tech-col"><div class="tech-category">Frontend</div> <div class="tech-items">${escape_html(project.techStack.frontend_framework)}</div></div> <div class="tech-col"><div class="tech-category">Backend</div> <div class="tech-items">${escape_html(project.techStack.backend_framework)}</div></div> <div class="tech-col"><div class="tech-category">Other</div> <div class="tech-items">${escape_html(project.techStack.database)}</div></div></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></main> <footer><p>Feel free to try out these projects, but please don't abuse them.</p></footer></div>`);
    bind_props($$props, { data });
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BlJNg_mY.js.map
