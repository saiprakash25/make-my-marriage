# Make My Marriage Project Status

The Next.js scaffold and public homepage are implemented. Sign-in, wedding workspaces, and live planning data are pending.

## Completed milestones

### Application scaffold

- Set up the Next.js App Router application with TypeScript, ESLint, a root layout, and global styles.
- Added scripts for local development, linting, type checking, and production builds.
- Verified that the development server starts and serves the root route.

### Public homepage

- Built the responsive homepage at `/` from the [approved Stitch reference](design/README.md). It includes a selectable sample ceremony timeline, planning feature highlights, a workspace preview, a photo gallery preview, and a labeled sample testimonial.
- Added smooth section navigation, scroll reveals, and hover effects. The page respects reduced-motion preferences.
- Grouped the homepage UI, sample data, and styles under `src/features/homepage`. The root route owns its metadata, and the ceremony selector handles browser interaction.
- Verified desktop and mobile rendering, ceremony selection, gallery loading, and motion settings. Lint, typecheck, and production build passed.

## Remaining work

- Connect homepage calls to action to sign-in and wedding creation once those flows are built. The current links lead to previews on the page.
- Implement the remaining product milestones using the [frozen PRD](PRD.pdf). The homepage currently uses sample data and illustrative media.
