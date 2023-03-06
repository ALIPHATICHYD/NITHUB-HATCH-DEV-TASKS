## Getting started with Tailwind CSS <hr>

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

## Tailwind CLI
The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

## Install Tailwind CSS <hr>
Install tailwind css via npm, and create your tailwind.config.js file.

1. In your Terminal, Input the following 
```
➽ npm install -D tailwindcss
➽ npx tailwindcss init
```

2. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
In your tailwind.config.js file add  "./src/**/*.{html,js}" to the content path, it should look like this;
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
In your scr/input.css file add the @tailwind directives, it should look like this;
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Start the Tailwind CLI build process
In your Terminal run the CLI tool to scan your template files for classes and build your CSS.
```
➽ npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

5. Start using Tailwind in your HTML
Add your compiled CSS file inside the <head> tag in your html file and start using Tailwind’s utility classes to style your content.
It should look like this;
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```