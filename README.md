# Multi-EVT

Anonymous project page. The current text and visual assets are illustrative placeholders, not claims about the final research.

## Edit the content

- `content.js`: title, summary, abstract, key points, demo categories, method text, benchmark values, resource links, and citation.
- `assets/teaser.svg`: main overview visual.
- `assets/method.svg`: method figure.
- `assets/demo-streams.svg` and `assets/demo-views.svg`: original synthetic demo illustrations.
- `styles.css`: visual appearance and responsive layouts.
- `index.html`: page structure and section headings.

No install or build step is needed. Open `index.html` in a browser, or serve this directory with `python -m http.server 8765`.

For a demo video, use an item like:

```js
{
  title: "Representative sequence",
  label: "EXAMPLE 01",
  description: "Explain what the sequence shows.",
  src: "assets/demo-01.mp4",
  poster: "assets/demo-01.jpg",
  type: "video",
  alt: "Describe the content of this video."
}
```

Keep file names simple (letters, numbers, hyphens, underscores) and all media under `assets/`. Images and videos use local relative paths. Resource links accept local asset paths or HTTPS links on `anonymous.4open.science`. Resources with empty links appear as unavailable, without broken download buttons. Videos play in an expanded dialog with native controls and no forced autoplay.

Replace each `null` in `results.rows[].values` with a measured number. Set each metric's label, direction, and `max` to the actual quantity, units, and chart range. A missing result stays `—`, not zero. Update captions, descriptions, and limitations along with the visuals. Set `showPlaceholderNotice` to `false` only when all illustrative content has been replaced.

## Anonymous hosting

Use a separate source repository for this website. Keep the repository private where the account's Pages plan allows it. Enable GitHub Pages from the same branch and root directory containing `index.html`, then anonymize this repository using Anonymous GitHub and enable its GitHub Pages option. The anonymous website and repository have distinct links; share the anonymous website link for the project page.

Use relative asset paths and upload the files directly; this page has no static-site-generator dependency. Keep `.nojekyll`. When updating content, refresh the anonymous snapshot as needed and verify the anonymous URL, since the mirror may cache an earlier commit.

Set expiration to remove the anonymous mirror rather than redirect to the original repository. Add identifying names, account names, and affiliations to the anonymization terms, avoiding broad words that could break JavaScript or CSS. Review the preview after replacement.

Images, videos, and PDFs require manual anonymization of visible content and metadata. This template has no analytics, third-party fonts, external media, author attribution, or personal links. Its `noindex` metadata and `robots.txt` discourage indexing but are not access controls or a guarantee of anonymity.

The layout is an original implementation inspired by the long-form academic presentation at https://flex-pi.github.io/. No text, figures, videos, or research results from that project are included.
