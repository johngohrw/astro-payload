prefix = "hero";

// ---

console.log("downloads are starting, focus document window NOW!");
setTimeout(async () => {
  const titles = document.querySelectorAll("section>div>div>h2>a");
  const nodes = document.querySelectorAll("section>div>div>button");
  for (const i in nodes) {
    n = nodes[i];
    t = titles[i].innerText;
    n.click();
    await sleep(100);
    const htmlContent = await navigator.clipboard.readText();
    await sleep(100);
    downloadString(
      `${htmlContent}`,
      toCamelCase(`${prefix} ${t}`),
      "text/html",
    );
    await sleep(100);
  }
}, 3000);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function downloadString(content, filename, mimeType = "text/plain") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function toCamelCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}
