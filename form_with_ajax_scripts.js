const form = $('#myform');

form.submit((e) => {

e.preventDefault();

$.ajax({
    type: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: form.serialize(),
    success: (data) => {
        console.log(data);
    },
    error: (err) => {
        console.log('Error');
        console.log(err);
    },
});
});

