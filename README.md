# Static Template Generator

The static template generator is a tool designed to help with the creation of static
templates for client projects.

## Things to consider

This was created with [11ty](https://www.11ty.dev/), a very simple static site generator. Additional documentation can be found on the 11ty website. Assets are compiled with Gulp. The provided gulpfile has been configured to handle the compilation of `.scss` files.

The dependencies have been acquired through [Yarn](https://yarnpkg.com). Therefore, to get started you will need to install the project dependencies with the following command:

```
yarn install
```

## Useful Scripts

**Run the local web server and compile assets locally**

```shell
yarn dev
```

**Build the project for production**

```shell
yarn prod
```

**Lint code (at the moment, scss only)**

```shell
yarn lint
```

## Asset Pipeline

We have used [laravel mix](https://laravel-mix.com/) to bundle assets. Mix is responsible for generating css with scss as well as transpiling JavaScript files. Let's take a look at the contents of the `webpack.mix.js` file.

If you need to configure this at any point then feel free to do so, additional API information can be retrieved on the [Mix Documentation](https://laravel-mix.com/docs/6.0/installation)

## Using Netlify Dev

The holding page uses a netlify function as part of an integration we have created with the Klaviyo API. To work with this function locally we would advise using Netlify's CLI tool.

Start by installing the cli tool globally:

```
$ npm i netlify-cli -g
```

Once installed, simply run:

```
$ netlify dev
```

Netlify Dev should take care of everything from there, however, if you experience any issues please raise this with the team or raise an issue in Github.

## Staying up to date with changes

Say you're building a site with this starter, but you still want to be able to pull in the latest changes, you can add a remote upstream pointing to this repository.

1. Navigate to your local theme folder.
2. Verify the list of remotes and validate that you have both an origin and upstream:

```
git remote -v
```

3. If you don't see an upstream, you can add one that points to Shopify's Dawn repository:

```
git remote add upstream https://github.com/StackUp-Digital/Artemis-11ty-Starter-Tailwind.git
```

4. Pull in the latest Dawn changes into your repository:

```
git fetch upstream
git pull upstream main
```

## Questions or Issues?

If you have any issues getting started or feel like the documentation is missing some information then please feel free to raise an issue against this repository.
