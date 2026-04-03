# Task: Build now.93.fyi

A public /now page. Simple, personal, no auth. Derek Sivers style.
See: https://nownownow.com/about

## Stack
Next.js 15 + Tailwind. Dark theme (#0f0808 bg, #ff2070 accent). Deploy to Vercel.

## Content (hardcoded for now, easy to edit in code)
Karl is a developer based in Florida (EDT timezone). Active projects:
- TrickAdvisor (trickadvisor.cc) — gay men's anonymous hookup review platform
- nwbfit (nfit.93.fyi) — MRI-adjusted workout tracking app
- nwb-yoga (nyoga.93.fyi) — yoga companion app
- 93.fyi — personal domain hub

## Page design
- Header: large "Now" title + subtitle "What I'm up to, as of [date]"
- Date: auto-shows today's date
- Sections (styled as clean readable prose blocks):
  1. **Building** — list active projects with one-line descriptions + links
  2. **Thinking about** — 2-3 philosophical/creative topics (make something thoughtful up based on his projects — someone building queer tech, privacy-focused apps)
  3. **Reading / watching** (leave placeholder text like "update this in src/app/page.tsx")
  4. **Location** — Miami/Florida area, EDT
- Footer: "Updated [month year]" + link back to 93.fyi

## Design
- Long-form readable typography, NOT a link list
- Generous whitespace, single column, max-width ~680px centered
- Hot pink accent for section headers
- Very personal, slightly literary tone

## Auth
None — fully public.

## After building:
1. `git init && git add -A && git commit -m "init: now.93.fyi personal now page"`
2. `gh repo create karlmarx/now-93fyi --public --source . --remote origin --push`
3. `vercel --yes --prod`
4. `vercel domains add now.93.fyi`
5. Write `DEPLOY_RESULT.md` with production URL
6. `openclaw system event --text "Done: now.93.fyi built and deployed" --mode now`
