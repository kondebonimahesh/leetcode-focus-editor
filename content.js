(function () {
    "use strict";

    document.addEventListener("keydown", function (event) {

        // Alt + C
        if (event.altKey && event.key.toLowerCase() === "c") {

            event.preventDefault();
            event.stopPropagation();

            // Find Monaco editor
            const editor = document.querySelector(".monaco-editor");

            if (!editor) {
                console.log("LeetCode editor not found.");
                return;
            }

            // Find Monaco's textarea
            const textarea = editor.querySelector("textarea");

            if (textarea) {
                textarea.focus();
                console.log("LeetCode editor focused.");
            } else {
                editor.click();
            }
        }
    });
})();
