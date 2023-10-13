document.addEventListener("DOMContentLoaded", function (){
    const user1Button = document.querySelector("#user1-send");
    const chatBox = document.querySelector('#chat-box');
    user1Button.addEventListener("click", function (){
        const user1Input = document.querySelector("#user1-message");
        const user1Text = user1Input.value;
        if(!user1Text) {
            return;
        }
        const divMessage1 = document.createElement('div');
        divMessage1.classList.add('message1');
        const name1 = document.createElement('p');
        name1.classList.add('name1');
        name1.textContent = 'USER1';
        divMessage1.appendChild(name1);
        const textMessage1 = document.createElement('p');
        textMessage1.classList.add('p1');
        textMessage1.textContent = user1Text;
        divMessage1.appendChild(textMessage1);
        chatBox.appendChild(divMessage1);
        user1Input.value = '';
    });

    const user2Button = document.querySelector("#user2-send");
    user2Button.addEventListener("click", function (){
        const user2Input = document.querySelector("#user2-message");
        const user2Text = user2Input.value;
        if(!user2Text) {
            return;
        }
        const divMessage2 = document.createElement('div');
        divMessage2.classList.add('message2');
        const name2 = document.createElement('p');
        name2.classList.add('name2');
        name2.textContent = 'USER2';
        divMessage2.appendChild(name2);
        const textMessage2 = document.createElement('p');
        textMessage2.classList.add('p2');
        textMessage2.textContent = user2Text;
        divMessage2.appendChild(textMessage2);
        chatBox.appendChild(divMessage2);
        user2Input.value = '';
    });
});