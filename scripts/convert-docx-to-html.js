const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function convert() {
  const inputPath = path.resolve(__dirname, '../public/docs/Onboarding Tutorial - EN.docx');
  const outputPath = path.resolve(__dirname, '../public/docs/onboarding-tutorial-en.html');

  try {
    const { value: html } = await mammoth.convertToHtml({ path: inputPath });

    // Wrap in a minimal HTML template and add a class to container for styling
    const fullHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Onboarding Tutorial - Tokenova</title>
  <link rel="stylesheet" href="/index.css">
  <style>
    body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; padding: 24px; color: #222; }
    .doc-content { max-width: 900px; margin: 0 auto; }
    .doc-content h1, .doc-content h2, .doc-content h3 { color: #0b5cff; }
    .doc-content p { line-height: 1.7; }
  </style>
</head>
<body>
  <div class="doc-content">
    ${html}
  </div>
</body>
</html>`;

    fs.writeFileSync(outputPath, fullHtml, 'utf8');
    console.log('Conversion complete. Output at', outputPath);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
}

convert();
