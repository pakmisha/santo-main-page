let mix = require("laravel-mix");
mix.pug = require("laravel-mix-pug-recursive");
mix.sass("./src/scss/app.scss", "css");
mix.js("./src/js/app.js", "js");
mix.options({
  processCssUrls: false,
  postCss: [require("tailwindcss"), require("autoprefixer")],
});
mix.pug("src/views/**/*.pug", "dist", {
  excludePath: "src/views",
  seeds:'src/seeds',
  pug: {
    pretty: true,
    debug: false,
    basedir: "dist",
  },
});


mix.setPublicPath("dist");

mix.browserSync({
  scrollRestoreTechnique: "cookie",
  server: {
    baseDir: "dist",
    index: "/index.html",
  },
  port: 8080,
  notify: false,
  files: ["dist/**/*.html"],
});

mix.disableNotifications();