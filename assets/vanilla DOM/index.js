
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('task-list');
  const taskID = [];

  //functionality for add Task (post) button;
  const addButton = document.getElementById('task-button');
  addButton.addEventListener('click', (e) => {
    const item = document.getElementById('task').value;
    console.log('create task button pressed');
    fetch('/secret/item', {
      method: 'POST',
      body: JSON.stringify({
        item: item
      }),
      headers: { 'Content-Type': 'application/json' },
      
    })
      .then(() => getData());
  });
  
  const getButton = document.getElementById('retrieve');
  getButton.addEventListener('click', () => {
    getData();
  });

  function getData() {
    list.innerHTML = '';
    fetch('/secret/item')
      .then((res) => res.json())
      .then((data) => {
        console.log('the item is', data);
        const newTaskList = [];
        const arrayOfVal = [];
        arrayOfVal.push(...Object.values(data));
        for (let i = 0; i < arrayOfVal.length; i++) {
          // newTaskList.push(arrayOfVal[i].item);
          // taskID.push(newTaskList[i].item);
          // createButton(newTaskList[i]);
          createButton(arrayOfVal[i]);
        }
      });
    //   const clearDiv = document.getElementById('dataDiv');
    //clearDiv.innerHTML = '';
    //   for (const el of data) {
    //     const task = document.createElement('p');
    //     task.setAttribute('id', `${el._id}`);
    //     const deleteBtn = document.createElement('button');
    //     task.innerHTML = `Task: ${el.item}`;
    //     document.getElementById('dataDiv').appendChild(data);
    //     deleteBtn.setAttribute('id', 'deleteData');
    //     deleteBtn.innerHTML = 'delete';
    //     deleteBtn.onclick = () => deleteData(`${el._id}`);
    //     document.getElementById(`${el._id}`).appendChild(deleteBtn);
    //   }
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  // Rendering DELETE buttons with newly added posts
  function createButton(item) {
    // Create the elements
    const itemDiv = document.createElement('div');
    const itemLi = document.createElement('li');
    const textNode = document.createTextNode(item.item);
    const button = document.createElement('button');
    const buttonText = document.createTextNode('X');
    button.classList.add('delete');
    // Then appendChild
    itemLi.appendChild(textNode);
    itemDiv.appendChild(itemLi);
    button.appendChild(buttonText);
    // Assign id
    itemLi.id = item._id;
    itemDiv.id = 'itemDiv';
    //console.log(item);
    // Add an event listener to hear for clicks
    button.addEventListener('click', (e) => {
      console.log(item);
      fetch(`secret/item/${item._id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: item._id,
        }),
      })
        .then(() => getData());
    });
    itemLi.appendChild(button);
    list.appendChild(itemDiv);
  } 
});



// function deleteData(_id) {
//   console.log('delete has been clicked');
//   fetch('/item', {
//     method: 'DELETE',
//     body: JSON.stringify({
//       _id
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// }

