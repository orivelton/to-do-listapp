// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBzwElqW4bz6_aVAY9juLtrRX9L8Ise5mw",
    authDomain: "todolistapp-e3207.firebaseapp.com",
    databaseURL: "https://todolistapp-e3207.firebaseio.com",
    projectId: "todolistapp-e3207",
    storageBucket: "todolistapp-e3207.appspot.com",
    messagingSenderId: "321083132416"
  }
};
