
async function fetchData() {
    const url = 'https://dummyjson.com/users'; // Replace with your JSON URL

    try {
        // Fetch the data from the URL
        const response = await fetch(url);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response is bad');
        }

        // Parse the JSON data
        const data = await response.json();
        console.log(data.users);
        const d = data.users;
        const container = document.getElementById('data-container');
        

        console.log(container);
        for (let i=0; i<30; i++){
            container.innerHTML += `<tr class = user${d[i].id}>
            <td class = name>${d[i].firstName} ${d[i].lastName}</td>
            <td class = user>${d[i].username}</td>
            <td class = email>${d[i].email}</td>
            <td>
                <button class=edit >edit</button>
                <button class=delete >delete</button>
            </td>
            
        </tr>`
        // delete_list.push(document.querySelector(`.user${d[i]} .delete`));

        }
        const buttons = document.querySelectorAll('.delete');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                button.parentNode.parentNode.remove();
            });
        });    

        const edits = document.querySelectorAll('.edit');
        let flag = false;
        edits.forEach(ed => {

            ed.addEventListener('click', ()=>{
                const row = ed.parentElement.parentElement;
                const nm = row.querySelector('.name');
                const us = row.querySelector('.user');
                const em = row.querySelector('.email');

                if(flag) {
                    ed.innerHTML = 'edit';
                    (nm.contentEditable = "false"); 
                    (us.contentEditable = "false"); 
                    (em.contentEditable = "false"); 
                    localStorage.setItem('editableContent', nm.innerHTML);
                    localStorage.setItem('editableContent', us.innerHTML);
                    localStorage.setItem('editableContent', em.innerHTML);
                }
                else  {
                    (nm.contentEditable = "true");
                    (us.contentEditable = "true");
                    (em.contentEditable = "true");
                    ed.innerHTML = 'save';
                }
                flag = !flag;
        })
    
        
        
    });
        
        const drop1 = document.querySelector('.drop-down');
        let drop_flag = false;    
            drop1.addEventListener('click', ()=>{
                
                
        //const drops = document.querySelectorAll('.drop-down').addEventListener('click', ()=>{
            drop_flag = !drop_flag;
            if(drop_flag){
                document.querySelector('.drop-down').setAttribute('src', './up.png');
                document.querySelector('.drop-list').classList.toggle('show');

            }
            else{
                document.querySelector('.drop-down').setAttribute('src', './down.png');
                document.querySelector('.drop-list').classList.toggle('show');
            }

        })


            
        
        
        

        // // Use the JSON data to update HTML
        // container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // Display formatted JSON data
    } catch (error) {
        // Handle errors
        console.error('There has been a problem with your fetch operation:', error);
    }
}
fetchData();




// toggleEdit();



