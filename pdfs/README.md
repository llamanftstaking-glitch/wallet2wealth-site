# PDFs

Drop the per-language PDF files in this directory using the naming convention:

```
w2w-en.pdf
w2w-es.pdf
w2w-it.pdf
w2w-fr.pdf
w2w-pt.pdf
w2w-ru.pdf
```

The download API (`app/api/download/[token]/route.ts`) streams these files
to buyers after token validation. They are intentionally gitignored — use
the PDF builder in `../pdf-builder/` to rebuild them, then copy here.

For Replit deploys, either rebuild on boot or upload the files into the
persistent Reserved VM volume mounted at this path.
