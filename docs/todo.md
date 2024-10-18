# TODO

## tsup - deprecated

I would like to leveraging the tsup bundler to bundle the core project.

## packageManager in package.json

I removed the  `"packageManager": "pnpm@8.14.0"` from the package.json file. Since it stops the project from running.

## storybook and core components collocated

The 'lib' mode of vite working differently between dev and prod mode. If sb moving out of the core package, the component has to be built for production (with rollup) every time files changed during development.

It is the wrong way from the development perspective. Even in the architecture perspective, the storybook and core components are separated is way cooler.

Since there is no way for now to build my own build pipeline for core components, I might as well move the storybook back to the core package.
