# Make My Marriage

- Read the relevant sections of the frozen specifications before changing product behavior:
  [PRD v1.1](docs/PRD.pdf), [System Architecture v1.1](docs/System_Design.pdf),
  [Database Design v1.0](docs/Database_Design.pdf), and [API Design v1.0](docs/API_Design.pdf).
  Surface gaps or conflicts before implementing the affected behavior. Changes to frozen
  decisions require explicit approval and the applicable versioned change record.
- Use the approved references in [docs/design](docs/design/README.md) for UI changes.
  Ask for missing designs before implementing the affected screens.
- Keep one Next.js App Router modular monolith. Organize business code by feature.
  Use server-side queries for member reads, Server Actions for member mutations,
  and Route Handlers for auth, guest APIs, and uploads. Share server-only business services.
- Validate external input with Zod. Verify identity, wedding membership, and resource ownership
  for private operations. Enforce creator-only membership administration and scoped, hashed,
  revocable guest capabilities.
- Keep Auth.js identity persistence separate from Mongoose domain models. Follow the documented
  indexes, lifecycle rules, and deletion semantics. Store photos in private S3 and publish
  automatically after successful durable validation and processing.
- Keep secrets and guest personal data out of source control and logs. Run lint, typecheck,
  production build, and applicable tests before reporting a change complete.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
