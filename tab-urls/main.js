var incognito;
var url;
var myArray = [];

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("myBtn").addEventListener("click", function() {
      chrome.tabs.query({currentWindow: true}, function(tabs) {
        arrayLength = tabs.length;
        //alert(arrayLength);
        document.getElementById("total").innerHTML += arrayLength;
        
        for (var i = 0; i < arrayLength; i++) {
            myArray.push(tabs[i].url);
        }
        obj = JSON.parse(JSON.stringify(myArray));
        console.log(obj);
        
        makeUL(myArray);
        
        /*
        var current = tabs[0];
        incognito = current.incognito;
        url = current.url;
        console.log(url);
        
        document.getElementById("demo").innerHTML = url; //
        */
    });
  });
});

function makeUL(array) {
    var list = document.getElementById("foo");

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        
        var aTag = document.createElement('a');
        aTag.setAttribute('href', array[i]);
        aTag.innerHTML = array[i];

        // Set its contents:
        //item.appendChild(document.createTextNode(array[i]));
        item.appendChild(aTag);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return;
}