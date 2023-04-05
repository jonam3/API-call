const doc = document.querySelector(".doc");
doc.addEventListener('submit', event => {
    event.preventDefault();
    const docData = new FormData(doc);
    const data = Object.fromEntries(docData);

    fetch('https://reqres.in/api/users', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) })
});