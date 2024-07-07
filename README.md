# wk2-code-challenge

## Requirements

- Array: 

Maintain a JavaScript array to store shopping list items.

- DOM Manipulation:
Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
Update the list item visually to indicate purchased items (e.g., strike through text, different background color).

- Event Handling:
Attach event listeners to the "Add" button to capture user input and add items to the list.
Attach event listeners to the list of items to allow users to mark them as purchased.
Attach an event listener to the "Clear List" button to remove all items from the list.

## System Requirements

- Node 18+
- A browser capable of running Javascript (Chrome, Firefox, Safari 0r Edge)
- Operating System (Windows 10, Mac0s, Linux, etc.)
- A text editor capable of running Javascript (Visual Studio Code, Vim Nano, Emacs, Atom, Sublime Text, etc.)
- RAM > 4GB
- Disk space > 1GB

## Installation
To use this repo, follow this steps:
### Alternative One
1. Open your terminal/CLI on your computer.
2. Clone the repository by running the following command:
        `git@github.com:bella-thehacker/wk2-code-challenge.git`

3. Moving to the folder by using the "cd" command
4. Open the folder by typing code . to open visual studio code.(Other programs would require another command).

## Content of Folder
- index.html file
- shopping.css file
- shopping.js file

### About Project
The project entails an interactive shopping list website. Where the user inputs what is required to be purchased and is able to mark it off once it is purchased. 

### Structure of the code
The folder contains html css and js files. the HTML file gives the basic structure of the website.The CSS website provides styling of the website and the js file makes the website interactive.

#### The js code
Most of the hours put in the making of this website was in the js file. The code makes use of event listeners and the DOM.In the begining i initialized an array
```js
let itemsArray = []
```

Next,I used querrySelector to find the form in my html file and then the button which had type submit which enebles it to take in input 
```js
document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault()
   handleAdd(e.target.frm1.value)

   itemsArray.push(frm1).
   console.log(itemsArray)


})
```
 After that I made the list where input content would go and the marked purchased button for every item after they are purchased
 ```js
 function handleAdd(list){
    let li = document.createElement('li')
    li.className = 'list-item'

    let textNode = document.createTextNode(list)

    let btn = document.createElement('button')
    btn.textContent =  ' Mark Purchased'
    btn.addEventListener('click', Purchased)
    btn.className = 'markbtn'

   


    li.appendChild(textNode)
    li.appendChild(btn)
    document.getElementById('listItems').appendChild(li)
    
}
```
I used CSS to style the strikethrough accordingly to give a visual representation of the purchased items
```css
strikethrough{
    text-decoration: line-through;
    color: #888;
}
```

Lastly I used an event listener to make the clear button by giving it a type "reset"
```js
document.querySelector('form').addEventListener('reset', (e) => {
    const listItems = document.getElementById('listItems')
    listItems.innerHTML = ''
    e.target.listItems.remove()

    itemsArray = []
    console.log(itemsArray)

})
```
## Credits
- I employed the help of [www.w3schools.com] How to make some of the js functions.

- I used https://moringa.instructure.com/courses/777/modules
notes from Moringa School nd some of the videos to figure out how to do it.

 - I was also able to get the idea of an interface from [www.youtube.com] where i found a couple of videos that helped me make my javascript file and the html file https://www.youtube.com/watch?v=80Hzj6xmcVc


 ## Privacy and Copyright
>>>>>>> 5b46c03 (modified readme)
Copyright (c) [2024] [Ivy Nyambura]

@@ -71,3 +143,13 @@ AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


