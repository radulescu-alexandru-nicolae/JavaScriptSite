const ul = document.querySelector('ul');
const persoane = ul.children;
const addItem = document.getElementById('submit');
const input = document.getElementById('input_add');

const hide = document.getElementById('hide');
const checkboxPersoana = document.querySelector('input.confirmed');

addItem.addEventListener('click', (e) => {
    let ul = document.getElementsByTagName('ul')[0];

    let li = document.createElement('li');
    let p = document.createElement('p');
    p.textContent = input.value;
    p.className = 'name'
    li.appendChild(p);
    attachItem(li);
    ul.appendChild(li);
    input.value = "";
})


function attachItem(li) {

    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = 'Confirmed';
    let inputt = document.createElement('input');
    inputt.type = 'checkbox';
    inputt.className = 'confirmed';
    li.appendChild(div);

    div.className = 'confirmare';
    div.appendChild(p);
    div.appendChild(inputt);


    let edit = document.createElement('button');
    edit.className = 'edit';
    edit.textContent = 'edit';

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'remove';
    li.appendChild(edit);
    li.appendChild(remove);

}

hide.addEventListener('click', (e) => {


    if (hide.checked === true) {
        for (var i = 0; i < persoane.length; i++) {

            var element = persoane[i].querySelector('input.confirmed');
            if (element.checked === false) {
                var persoana = persoane[i];
                persoana.style.display = 'none';
            }
        }
    } else {
        for (var i = 0; i < persoane.length; i++) {

            var element = persoane[i].querySelector('input.confirmed');
            if (element.checked === false) {
                var persoana = persoane[i];
                persoana.style.display = 'block';
            }
        }
    }

})


ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'INPUT') {
        if (e.target.className == 'confirmed') {
            let div = e.target.parentNode;
            if (div.querySelector('input.confirmed').checked == true) {
                let ul = div.parentNode;
                ul.style.border = '1px solid rgb(66, 167, 245)';
                ul.style.borderBottom = '2px solid rgb(66, 167, 245) ';
            } else {
                let ul = div.parentNode;
                ul.style.border = '1px solid gray';
            }
        }
    }
})

ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        if (e.target.className == 'remove') {
            let li = e.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        } else if (e.target.className == 'edit') {
            let li = e.target.parentNode;
            let input = document.createElement('input');
            input.type = 'text';
            let nume = li.querySelector('p.name');
            input.value = nume.textContent;
            nume.style.display = 'none';
            input.className = 'name';
            li.insertBefore(input, li.querySelector('div.confirmare'));
            li.querySelector('button.edit').style.display = 'none';
            let save = document.createElement('button');
            save.textContent = 'save';
            save.className = 'save';
            li.insertBefore(save, li.querySelector('button.remove'));

        } else if (e.target.className == 'save') {
            let li = e.target.parentNode;
            let p = document.createElement('p');
            p.className = 'name';
            p.textContent = li.querySelector('input').value;
            li.insertBefore(p, li.querySelector('div.confirmare'));
            li.querySelector('button.save').style.display = 'none';
            let edit = document.createElement('button');
            edit.className = 'edit';
            edit.textContent = 'edit';
            li.insertBefore(edit, li.querySelector('button.remove'));
            li.querySelector('input').style.display = 'none';
        }
    }
})