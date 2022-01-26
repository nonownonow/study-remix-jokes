var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/ihr/remix/remix-jokes/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/builda/_assets/global-TZS4O3QK.css";

// app/styles/global-medium.css
var global_medium_default = "/builda/_assets/global-medium-XUKRIFYO.css";

// app/styles/global-large.css
var global_large_default = "/builda/_assets/global-large-VUKZR3QB.css";

// route-module:/Users/ihr/remix/remix-jokes/app/root.tsx
var links = () => [
  { rel: "stylesheets", href: global_default },
  { rel: "stylesheets", href: global_medium_default, media: "print, (min-width: 640px)" },
  { rel: "stylesheets", href: global_large_default, media: "screen and (min-width: 1024px)" }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h1", null, "J\u{1F92A}KE Shop")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h2", null, "menu"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "HOME"), /* @__PURE__ */ React.createElement("li", null, "OUR TEAM"), /* @__PURE__ */ React.createElement("li", null, "PROJECTS"), /* @__PURE__ */ React.createElement("li", null, "CONTACT"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("h1", null, "find page"), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "search text"), /* @__PURE__ */ React.createElement("input", {
    type: "text"
  }), /* @__PURE__ */ React.createElement("button", null, "Go!")))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Rerlated"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Oh I do like to be beside the seaside")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Oh I do like to be beside the sea")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Although in the North of England")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "It never stops raining")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Oh well...")))), /* @__PURE__ */ React.createElement("footer", null, "Copyright"), true ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/goods/testGoods.tsx
var testGoods_exports = {};
__export(testGoods_exports, {
  default: () => testGoods_default
});
init_react();
function testGoods_default() {
  return /* @__PURE__ */ React.createElement("div", null, "goodTest");
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links2
});
init_react();

// app/styles/index.css
var styles_default = "/builda/_assets/index-PPYIZ5QE.css";

// route-module:/Users/ihr/remix/remix-jokes/app/routes/index.tsx
var import_remix3 = __toModule(require_remix());
var links2 = () => [
  { rel: "stylesheet", href: styles_default }
];
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("article", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Remix ", /* @__PURE__ */ React.createElement("span", null, "Jokes!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "jokes"
  }, "Read Jokes"))))));
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/styles/jokes.css
var jokes_default = "/builda/_assets/jokes-TVBGLI3Q.css";

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/jokes.tsx
var links3 = () => [
  { rel: "stylesheets", href: jokes_default }
];
var loader = async () => {
  const data = {
    jokeListItems: await db.joke.findMany({
      take: 5,
      select: { id: true, name: true },
      orderBy: { createdAt: "desc" }
    })
  };
  return data;
};
function JokesRoute() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("article", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Remix Jokes",
    "arial-label": "Remix Jokes"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("h2", null, "more jokes!"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map((joke) => /* @__PURE__ */ React.createElement("li", {
    key: joke.id
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: joke.id
  }, joke.name)))), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "new",
    className: "button"
  }, "Add Your Own")), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => jokeId_default,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Error("Joke not found");
  const data = { joke };
  return data;
};
function jokeId_default() {
  const data = (0, import_remix5.useLoaderData)();
  const { jokeId } = (0, import_remix5.useParams)();
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h3", null, jokeId, " jokes"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, "data.joke.name"), /* @__PURE__ */ React.createElement("p", null, data.joke.content), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, data.joke.name)));
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute,
  loader: () => loader3
});
init_react();
var import_remix6 = __toModule(require_remix());
var loader3 = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  const data = { randomJoke };
  return data;
};
function JokesIndexRoute() {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h3", null, "Read joke by a random"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink')));
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => JokesNewRoute
});
init_react();
var import_remix7 = __toModule(require_remix());
function validateJokeContent(content) {
  if (content.length < 10) {
    return "That joke is too short";
  }
}
function validateJokeName(name) {
  if (name.length < 2) {
    return "that joke name is too short";
  }
}
var badRequest = (data) => {
  return (0, import_remix7.json)(data, { status: 400 });
};
var action = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");
  if (typeof name !== "string" || typeof content !== "string") {
    return badRequest({ formErrors: "Form not submitted correctly." });
  }
  const fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  };
  const fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const joke = await db.joke.create({ data: fields });
  return (0, import_remix7.redirect)(`/jokes/${joke.id}`);
};
function JokesNewRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const actionData = (0, import_remix7.useActionData)();
  return /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("h3", null, "Create joke"), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    id: "name",
    name: "name",
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.name) : null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "content"
  }, "Content"), /* @__PURE__ */ React.createElement("textarea", {
    id: "content",
    name: "content",
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "content-error"
  }, (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.content) : null)), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add")));
}

// route-module:/Users/ihr/remix/remix-jokes/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => loginRoutes,
  links: () => links4,
  loader: () => loader4
});
init_react();

// app/styles/login.css
var login_default = "/builda/_assets/login-AIL4K2Y2.css";

// route-module:/Users/ihr/remix/remix-jokes/app/routes/login.tsx
var import_remix8 = __toModule(require_remix());
var links4 = () => [
  { rel: "stylesheet", href: login_default }
];
var loader4 = () => {
  return [];
};
function loginRoutes() {
  const [searchParam] = (0, import_remix8.useSearchParams)();
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h2", null, "login menu"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "login"
  }, "Login"), /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "login",
    name: "action"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "register"
  }, "Register"), /* @__PURE__ */ React.createElement("input", {
    id: "register",
    type: "radio",
    name: "action"
  }))))), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Login"), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Insert user information"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    name: "username",
    type: "text"
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    name: "password",
    type: "text"
  }))), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParam.get("redirectTo") ?? void 0
  })), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("h2", null, "Register"), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Insert user information"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Username")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Password")))));
}

// route-module:/Users/ihr/remix/remix-jokes/app/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => test_default
});
init_react();
function test_default() {
  return /* @__PURE__ */ React.createElement("div", null, "good jjkkddddtkhk");
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/goods/testGoods": {
    id: "routes/goods/testGoods",
    parentId: "root",
    path: "goods/testGoods",
    index: void 0,
    caseSensitive: void 0,
    module: testGoods_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "test": {
    id: "test",
    parentId: "root",
    path: "/test/routes/*",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9paHIvcmVtaXgvcmVtaXgtam9rZXMvYXBwL3Jvb3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC9yb3V0ZXMvZ29vZHMvdGVzdEdvb2RzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2loci9yZW1peC9yZW1peC1qb2tlcy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2loci9yZW1peC9yZW1peC1qb2tlcy9hcHAvcm91dGVzL2pva2VzLnRzeCIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC9yb3V0ZXMvam9rZXMvJGpva2VJZC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9paHIvcmVtaXgvcmVtaXgtam9rZXMvYXBwL3JvdXRlcy9qb2tlcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9paHIvcmVtaXgvcmVtaXgtam9rZXMvYXBwL3JvdXRlcy9qb2tlcy9uZXcudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC90ZXN0LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2loci9yZW1peC9yZW1peC1qb2tlcy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC9yb3V0ZXMvZ29vZHMvdGVzdEdvb2RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9paHIvcmVtaXgvcmVtaXgtam9rZXMvYXBwL3JvdXRlcy9qb2tlcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2loci9yZW1peC9yZW1peC1qb2tlcy9hcHAvcm91dGVzL2pva2VzLyRqb2tlSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9paHIvcmVtaXgvcmVtaXgtam9rZXMvYXBwL3JvdXRlcy9qb2tlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2loci9yZW1peC9yZW1peC1qb2tlcy9hcHAvcm91dGVzL2pva2VzL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2loci9yZW1peC9yZW1peC1qb2tlcy9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvaWhyL3JlbWl4L3JlbWl4LWpva2VzL2FwcC90ZXN0LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvZ29vZHMvdGVzdEdvb2RzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZ29vZHMvdGVzdEdvb2RzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZ29vZHMvdGVzdEdvb2RzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2pva2VzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvam9rZXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJqb2tlc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2pva2VzLyRqb2tlSWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9qb2tlcy8kam9rZUlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2pva2VzXCIsXG4gICAgcGF0aDogXCI6am9rZUlkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvam9rZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9qb2tlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9qb2tlc1wiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvam9rZXMvbmV3XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvam9rZXMvbmV3XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2pva2VzXCIsXG4gICAgcGF0aDogXCJuZXdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibG9naW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInRlc3RcIjoge1xuICAgIGlkOiBcInRlc3RcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvdGVzdC9yb3V0ZXMvKlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpbmtzRnVuY3Rpb24sIExpdmVSZWxvYWQsIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IGdsb2JhbE1lZGl1bVN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9nbG9iYWwtbWVkaXVtLmNzcydcbmltcG9ydCBnbG9iYWxMYXJnZVN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9nbG9iYWwtbGFyZ2UuY3NzJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIHsgcmVsOiAnc3R5bGVzaGVldHMnLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0cycsIGhyZWY6IGdsb2JhbE1lZGl1bVN0eWxlc1VybCwgbWVkaWE6ICdwcmludCwgKG1pbi13aWR0aDogNjQwcHgpJyB9LFxuICB7IHJlbDogJ3N0eWxlc2hlZXRzJywgaHJlZjogZ2xvYmFsTGFyZ2VTdHlsZXNVcmwsIG1lZGlhOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJyB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgPGhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XG4gICAgICA8dGl0bGU+UmVtaXg6IFNvIGdyZWF0LCBpdCdzIGZ1bm55ITwvdGl0bGU+XG4gICAgICA8TGlua3MvPlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICA8aGVhZGVyPjxoMT5KXHVEODNFXHVERDJBS0UgU2hvcDwvaDE+PC9oZWFkZXI+XG4gICAgPG5hdj5cbiAgICAgIDxoMj5tZW51PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkhPTUU8L2xpPlxuICAgICAgICA8bGk+T1VSIFRFQU08L2xpPlxuICAgICAgICA8bGk+UFJPSkVDVFM8L2xpPlxuICAgICAgICA8bGk+Q09OVEFDVDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxoMT5maW5kIHBhZ2U8L2gxPlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPnNlYXJjaCB0ZXh0PC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXsndGV4dCd9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5HbyE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8bWFpbj5cbiAgICAgIDxPdXRsZXQvPlxuICAgIDwvbWFpbj5cbiAgICA8YXNpZGU+XG4gICAgICA8aDI+UmVybGF0ZWQ8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PaCBJIGRvIGxpa2UgdG8gYmUgYmVzaWRlIHRoZSBzZWFzaWRlPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk9oIEkgZG8gbGlrZSB0byBiZSBiZXNpZGUgdGhlIHNlYTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BbHRob3VnaCBpbiB0aGUgTm9ydGggb2YgRW5nbGFuZDwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5JdCBuZXZlciBzdG9wcyByYWluaW5nPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk9oIHdlbGwuLi48L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9hc2lkZT5cbiAgICA8Zm9vdGVyPkNvcHlyaWdodDwvZm9vdGVyPlxuICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IDxMaXZlUmVsb2FkLz4gOiBudWxsfVxuICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gPGRpdj5nb29kVGVzdDwvZGl2PlxufSIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJy4uL3N0eWxlcy9pbmRleC5jc3MnXG5pbXBvcnQgeyBMaW5rLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhSb3V0ZSAoKSB7XG4gIHJldHVybiA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8aDI+UmVtaXggPHNwYW4+Sm9rZXMhPC9zcGFuPjwvaDI+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJqb2tlc1wiPlJlYWQgSm9rZXM8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9hcnRpY2xlPlxufSIsICJpbXBvcnQgeyBMaW5rLCBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgam9rZXNTdHlsZVVybCBmcm9tICcuLi9zdHlsZXMvam9rZXMuY3NzJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7IHJlbDogJ3N0eWxlc2hlZXRzJywgaHJlZjogam9rZXNTdHlsZVVybCB9XG5dXG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgam9rZUxpc3RJdGVtczogQXJyYXk8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfT4gfVxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGpva2VMaXN0SXRlbXM6IGF3YWl0IGRiLmpva2UuZmluZE1hbnkoe1xuICAgICAgdGFrZTogNSxcbiAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9LFxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2tlc1JvdXRlICgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJqb2tlcy1sYXlvdXRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJqb2tlcy1oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaG9tZS1saW5rXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1peCBKb2tlc1wiXG4gICAgICAgICAgICAgICAgICBhcmlhbC1sYWJlbD1cIlJlbWl4IEpva2VzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+XHVEODNFXHVERDJBPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1tZWRpdW1cIj5KXHVEODNFXHVERDJBS0VTPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgPExpbmsgdG89XCIuXCI+R2V0IGEgcmFuZG9tIGpva2U8L0xpbms+XG4gICAgICAgICAgPGgyPm1vcmUgam9rZXMhPC9oMj5cbiAgICAgICAgICA8cD5IZXJlIGFyZSBhIGZldyBtb3JlIGpva2VzIHRvIGNoZWNrIG91dDo8L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2RhdGEuam9rZUxpc3RJdGVtcy5tYXAoam9rZSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2pva2UuaWR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtqb2tlLmlkfT57am9rZS5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPExpbmsgdG89XCJuZXdcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIEFkZCBZb3VyIE93blxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiam9rZXMtbWFpblwiPlxuICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxPdXRsZXQvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59IiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5kZWNsYXJlICBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIGRiLiRjb25uZWN0KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KClcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiXG59XG5cbmV4cG9ydCB7IGRiIH0iLCAiaW1wb3J0IHR5cGUgeyBKb2tlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGpva2U6IEpva2UgfVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGpva2UgPSBhd2FpdCBkYi5qb2tlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBwYXJhbXMuam9rZUlkIH1cbiAgfSlcbiAgaWYgKCFqb2tlKSB0aHJvdyBuZXcgRXJyb3IoJ0pva2Ugbm90IGZvdW5kJylcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHsgam9rZSB9XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKVxuICBjb25zdCB7IGpva2VJZCB9ID0gdXNlUGFyYW1zKClcbiAgcmV0dXJuIDxhcnRpY2xlPlxuICAgIDxoMz57am9rZUlkfSBqb2tlczwvaDM+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDQ+ZGF0YS5qb2tlLm5hbWU8L2g0PlxuICAgICAgPHA+XG4gICAgICAgIHtkYXRhLmpva2UuY29udGVudH1cbiAgICAgIDwvcD5cbiAgICAgIDxMaW5rIHRvPXsnLid9PntkYXRhLmpva2UubmFtZX08L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvYXJ0aWNsZT5cblxufSIsICJpbXBvcnQgeyBKb2tlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcblxudHlwZSBMb2FkZXJEYXRhID0geyByYW5kb21Kb2tlOiBKb2tlIH1cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb3VudCA9IGF3YWl0IGRiLmpva2UuY291bnQoKVxuICBjb25zdCByYW5kb21Sb3dOdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb3VudClcbiAgY29uc3QgW3JhbmRvbUpva2VdID0gYXdhaXQgZGIuam9rZS5maW5kTWFueSh7XG4gICAgdGFrZTogMSxcbiAgICBza2lwOiByYW5kb21Sb3dOdW1iZXJcbiAgfSlcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHsgcmFuZG9tSm9rZSB9XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpva2VzSW5kZXhSb3V0ZSAoKSB7XG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB1c2VMb2FkZXJEYXRhKClcblxuICByZXR1cm4gPGFydGljbGU+XG4gICAgPGgzPlJlYWQgam9rZSBieSBhIHJhbmRvbTwvaDM+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDQ+SGVyZSdzIGEgcmFuZG9tIGpva2U6PC9oND5cbiAgICAgIDxwPlxuICAgICAgICB7ZGF0YS5yYW5kb21Kb2tlLmNvbnRlbnR9XG4gICAgICA8L3A+XG4gICAgICA8TGluayB0bz17ZGF0YS5yYW5kb21Kb2tlLmlkfT5cIntkYXRhLnJhbmRvbUpva2UubmFtZX1cIiBQZXJtYWxpbms8L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuICA8L2FydGljbGU+XG59IiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3JzPzogc3RyaW5nXG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgY29udGVudDogc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVKb2tlQ29udGVudCAoY29udGVudDogc3RyaW5nKSB7XG4gIGlmIChjb250ZW50Lmxlbmd0aCA8IDEwKSB7XG4gICAgcmV0dXJuICdUaGF0IGpva2UgaXMgdG9vIHNob3J0J1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSm9rZU5hbWUgKG5hbWU6IHN0cmluZykge1xuICBpZiAobmFtZS5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuICd0aGF0IGpva2UgbmFtZSBpcyB0b28gc2hvcnQnXG4gIH1cbn1cblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICBjb25zdCBuYW1lID0gZm9ybS5nZXQoJ25hbWUnKVxuICBjb25zdCBjb250ZW50ID0gZm9ybS5nZXQoJ2NvbnRlbnQnKVxuXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmb3JtRXJyb3JzOiAnRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS4nIH0pXG4gIH1cblxuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICBuYW1lOiB2YWxpZGF0ZUpva2VOYW1lKG5hbWUpLFxuICAgIGNvbnRlbnQ6IHZhbGlkYXRlSm9rZUNvbnRlbnQoY29udGVudClcbiAgfVxuXG4gIGNvbnN0IGZpZWxkcyA9IHsgbmFtZSwgY29udGVudCB9XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pXG4gIH1cblxuICBjb25zdCBqb2tlID0gYXdhaXQgZGIuam9rZS5jcmVhdGUoeyBkYXRhOiBmaWVsZHMgfSlcbiAgcmV0dXJuIHJlZGlyZWN0KGAvam9rZXMvJHtqb2tlLmlkfWApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpva2VzTmV3Um91dGUgKCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8aDM+Q3JlYXRlIGpva2U8L2gzPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPkFkZCB5b3VyIG93biBoaWxhcmlvdXMgam9rZTwvbGVnZW5kPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ubmFtZX1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17XG4gICAgICAgICAgICAgIEJvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/Lm5hbWUpIHx8XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5uYW1lXG4gICAgICAgICAgICAgICAgPyAnbmFtZS1lcnJvcidcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5uYW1lID8gKFxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnZm9ybS12YWxpZGF0aW9uLWVycm9yJ31cbiAgICAgICAgICAgICAgcm9sZT17J2FsZXJ0J31cbiAgICAgICAgICAgICAgaWQ9eyduYW1lLWVycm9yJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZmllbGRFcnJvcnMubmFtZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtcbiAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5jb250ZW50KSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnY29udGVudC1lcnJvcidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudCA/IChcbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGlvbi1lcnJvclwiXG4gICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgIGlkPVwiY29udGVudC1lcnJvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uY29udGVudH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9wPlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxwPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L2Zvcm0+XG4gIClcbn0iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9sb2dpbi5jc3MnXG5pbXBvcnQgeyBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1cbl1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblJvdXRlcyAoKSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbV0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICByZXR1cm4gPGFydGljbGU+XG4gICAgPG5hdj5cbiAgICAgIDxoMj5sb2dpbiBtZW51PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPXsnbG9naW4nfT5Mb2dpbjwvbGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwibG9naW5cIiBuYW1lPVwiYWN0aW9uXCIvPjwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxwPjxsYWJlbCBodG1sRm9yPXsncmVnaXN0ZXInfT5SZWdpc3RlcjwvbGFiZWw+PGlucHV0IGlkPVwicmVnaXN0ZXJcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWN0aW9uXCIvPjwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxsZWdlbmQ+SW5zZXJ0IHVzZXIgaW5mb3JtYXRpb248L2xlZ2VuZD5cbiAgICAgICAgPHA+PGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD48aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIi8+PC9wPlxuICAgICAgICA8cD48bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPjxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiLz48L3A+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVkaXJlY3RUb1wiIHZhbHVlPXtzZWFyY2hQYXJhbS5nZXQoJ3JlZGlyZWN0VG8nKSA/PyB1bmRlZmluZWR9Lz5cbiAgICA8L0Zvcm0+XG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxlZ2VuZD5JbnNlcnQgdXNlciBpbmZvcm1hdGlvbjwvbGVnZW5kPlxuICAgICAgICA8cD48bGFiZWw+VXNlcm5hbWU8L2xhYmVsPjwvcD5cbiAgICAgICAgPHA+PGxhYmVsPlBhc3N3b3JkPC9sYWJlbD48L3A+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvRm9ybT5cbiAgPC9hcnRpY2xlPlxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiA8ZGl2Pmdvb2Qgampra2RkZGR0a2hrPC9kaXY+XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8s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
