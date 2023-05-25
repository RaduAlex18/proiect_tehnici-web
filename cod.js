let ar=[]
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nume = document.getElementById('name').value;
    ar.push(nume);

    const namePattern = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/;

    if (!namePattern.test(nume)) {
        alert('Introduceți un nume de persoană valid.');
        document.getElementById('name').value = '';
    return;
  }

    const mesaj = document.getElementById('message').value;
    ar.push(mesaj);
  
    const mesaj_nou = document.createElement('p');

    const element = document.getElementById('buton_stergere');

    const data = new Date();
    const format_data = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    const computedStyle = window.getComputedStyle(element);
    const textColor = computedStyle.color;

    mesaj_nou.textContent = ar[0].toUpperCase() + ': ' + ar[1] + '     ' + format_data;

    mesaj_nou.style.color=textColor;

    const container_nou = document.getElementById('container_mesaj');
    container_nou.appendChild(mesaj_nou);
  
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});  

document.getElementById('buton_stergere').addEventListener('click', function(event) {
    const mesaj_c = document.getElementById('container_mesaj');

    setTimeout(() => {
        mesaj_c.lastChild.remove(event.target);
      }, 1000);
});