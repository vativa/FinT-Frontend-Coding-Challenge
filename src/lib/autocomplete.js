export default function(inp, arr) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        closeAllLists();
        if (!val) return false;
        currentFocus = -1;
        // Create a DIV element that will contain the items (values)
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        // Append the DIV element as a child of the autocomplete container
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (RegExp(val, 'i').test(arr[i])) {
                b = document.createElement("DIV");
                // Make the matching letters bold
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                // Insert a input field that will hold the current array item's value
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                // Execute a function when someone clicks on the item value's div
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    // Execute a function presses a key on the keyboard
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {// arrow down
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {// arrow up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {// enter
            e.preventDefault();
            if (currentFocus > -1) {
                // Simulate a click on the "active" item
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        // Function to remove the "active" class from all autocomplete items
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        // Close all autocomplete lists in the document, except the one passed as an argument
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    // Click away function - when someone clicks on the document
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}
