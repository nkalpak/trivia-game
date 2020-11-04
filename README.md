## Trivia game application

## [Live Demo](https://hardcore-pike-9b08fa.netlify.app/)

#### Project Setup
1. Run `yarn install`
2. Create a `.env` file in the root directory and copy the contents from `.env-example`, replacing as you see fit _(this project doesn't use `.env`, it is only here for showcase purposes)_
3. Run `yarn start`

#### Folder Structure
- `assets` -- all the visual assets
    - `icons` -- svg icons as components
- `components` -- all presentational components
- `global` -- resources that don't belong to a particular component, but will be used by many components *(types, routes, styled components, etc.)*
- `packages` -- components that can be exported to a different project *(have little or no business logic)*
- `utils` -- utility functions to avoid re-writing logic
- `routes` -- components that are provided to React Router's `route` prop, they serve to provide easy discovery of the project's different pages 
 
#### Conventions
- Components live in a `{component-name}` directory
    - `{component-name}.tsx` -- the actual React component
    - `use-{component-name}.ts` -- all the hooks a component needs 
    - `{component-name}-styles.ts` -- styled components
    - `{component-name}-types.ts` -- typescript types
    - `{component-name}-utils.ts` -- utility functions for the component
    - Everything is exported from an `index.ts` file inside the `{component-name}` directory
    - If a component has sub-components, they are placed within a `components` folder inside the main component directory *(limited to 1 level of nesting)*
- Uses typescript with strict rules and no `any`
- Uses only functional components with hooks
- The naming convention is `kebab-case` for all files and directories

#### Linting
##### Eslint
This project uses the Airbnb eslint config and typescript-eslint 

All custom rules are inside `.eslintrc`

#### Dependencies
- `react-router-dom` -- routing
- `axios` -- http requests
- `react-query` -- fetching & caching
- `styled-components`
- `typescript`
- `html-react-parser` -- replaces HTML entities from JSON data
