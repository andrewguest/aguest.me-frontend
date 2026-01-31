const API_URL = "https://api.aguest.me/";
const load = async ({ fetch }) => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
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
    repoIcon: "fas fa-code-branch"
  }));
  return {
    projects
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BlJNg_mY.js')).default;
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/nodes/2.DYzSVOdv.js","_app/immutable/chunks/CCG6mtaT.js","_app/immutable/chunks/CUf7WNmo.js","_app/immutable/chunks/2mD4riWn.js","_app/immutable/chunks/DTYM_EJY.js","_app/immutable/chunks/ByTSGF4o.js","_app/immutable/chunks/DAO3S3Ij.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-CnTSBnsq.js.map
