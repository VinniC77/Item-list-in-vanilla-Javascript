let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item function
function addItem(e){
    e.preventDefault();
    
    // get input value
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');
    
    // add a className on it
    li.className = 'list-group-item';
    
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    let deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove Item function
function removeItem(e){
    if(e.target.classList.contains('delete')) {
        if(confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items function
function filterItems(e){
    // convert text to lowercase to be able to compare it with the text
    let text = e.target.value.toLowerCase();
    
    // get li's
    let items = itemList.getElementsByTagName('li');

    // Converting to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}