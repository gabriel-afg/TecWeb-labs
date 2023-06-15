document.addEventListener('DOMContentLoaded', function() {
  
  // GET
  document.getElementById('btnGet').addEventListener('click', () => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
      });
  });

  // POST
  document.getElementById('btnPost').addEventListener('click', () => {
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const email = document.getElementById('emailInput').value;

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  });

  // PUT
  document.getElementById('btnPut').addEventListener('click', () => {
    const userId = document.getElementById('userIdInput').value;
    const name = document.getElementById('nameInput').value;
    const lastName = document.getElementById('lastName').value;
    const emailPUT = document.getElementById('emailPUT').value;

    const data = {
      first_name: name,
      last_name: lastName,
      email: emailPUT
    };

    fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  });

  // DELETE
  document.getElementById('btnDelete').addEventListener('click', () => {
    const userId = document.getElementById('userIdInput').value;

    fetch(`https://reqres.in/api/users/${userId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 204) {
          console.log('Deletion successful');
        } else {
          console.log('Deletion failed');
        }
      });
  });

});