## Trivia game application

## [Live Demo](https://heuristic-jones-5d59a6.netlify.app)

#### Project Setup
1. Run `yarn install`
2. Run `yarn start`

#### Folder Structure
- `assets` -- all the visual assets
    - `icons` -- svg icons as components
- `components` -- all presentational components
- `global` -- resources that will be used by many components *(types, routes, styled components, etc.)*
- `packages` -- components that can be exported to a different project *(have little or no business logic)*
- `utils` -- utility functions to avoid re-writing logic

#### Conventions
- Uses typescript with strict rules and no `any`
- Uses only functional components with hooks
- The naming convention is `kebab-case` for all files and directories
- If a component has sub-components, they are placed within a `components` folder inside the main component directory
- Components live in a `.tsx` file with the same name as the directory, and are re-exported from an `index.ts`
- The hooks that a component needs live in a `use-{component_name}` file

#### Dependencies
- `react-router-dom` -- routing
- `axios` -- http requests
- `react-query` -- fetching & caching
- `styled-components`
- `typescript`
- `html-react-parser` -- replaces HTML entities from JSON data
