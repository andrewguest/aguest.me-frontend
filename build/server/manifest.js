const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CpA28tE6.js",app:"_app/immutable/entry/app.DLW9gQXh.js",imports:["_app/immutable/entry/start.CpA28tE6.js","_app/immutable/chunks/Kw3GVbBb.js","_app/immutable/chunks/CUf7WNmo.js","_app/immutable/chunks/C3jD9zKT.js","_app/immutable/entry/app.DLW9gQXh.js","_app/immutable/chunks/CUf7WNmo.js","_app/immutable/chunks/DTYM_EJY.js","_app/immutable/chunks/CCG6mtaT.js","_app/immutable/chunks/C3jD9zKT.js","_app/immutable/chunks/BE9rdhKG.js","_app/immutable/chunks/DAO3S3Ij.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dsj56swT.js')),
			__memo(() => import('./chunks/1-DD-Hv6ok.js')),
			__memo(() => import('./chunks/2-CnTSBnsq.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
