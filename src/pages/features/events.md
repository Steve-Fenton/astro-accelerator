---
title: Events
navOrder: 600
pubDate: 2026-02-14
keywords: astro accelerator,events,timeline
description: How to use the events content collection to show a chronological timeline of upcoming and past events.
---

The events feature allows you to manage a chronological list of events using an Astro content collection.

## Events Collection

Events are stored as markdown files in `src/content/events/`.

### Schema

The schema for events is defined in `src/content/config.ts`:

| Property | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The name of the event. |
| `description` | `string` | A short summary shown on the events list page. |
| `startDate` | `date` | When the event starts. |
| `endDate` | `date` (optional) | When the event ends. |
| `location` | `string` | Where the event is held (e.g., a city or "Remote"). |
| `linkHref` | `string` (optional) | An external link, such as for registration. |
| `linkText` | `string` (optional) | The text for the external link. |

## Layouts

The events feature uses a dual layout system to provide both a list view and a detailed view for individual events.

### Events List

An events list can be shown on a markdown page using the Events layout.

```yaml
layout: src/layouts/Events.astro
```

You can shown an archive by passing the `isArchive` flag.

```yaml
isArchive: true
```

Example

- `events.md` shows upcoming events
- `events/archive.md` shows archived events
- `events/[...slug].astro` shows event details

The list view automatically groups events by year and filters them into "Upcoming" and "Archive" (past) views. Each item shows a description and provides two links:

1. **CTA Link**: An optional external link (e.g., "Register Now").
2. **More Details**: A link to the internal event details page.

## Configuration

To add a new event, create a markdown file in `src/content/events/`:

```markdown
---
title: "Astro Accelerator Workshop"
description: "A deep dive into Astro Accelerator themes and components."
startDate: 2026-05-20
location: "Remote"
linkHref: "https://example.com/register"
linkText: "Register Now"
---

Join us for a three-hour session where we explore...
```
