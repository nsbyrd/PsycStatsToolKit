// Copy-to-clipboard for code / write-up boxes. Progressive enhancement only —
// every page works fully without this file.
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".copy-btn");
  if (!btn) return;
  var box = btn.closest("[data-copy]");
  var target = box && box.querySelector("[data-copy-text]");
  var text = target ? target.innerText : "";
  if (navigator.clipboard) navigator.clipboard.writeText(text);
  var old = btn.textContent;
  btn.textContent = "Copied";
  setTimeout(function () { btn.textContent = old; }, 1200);
});
