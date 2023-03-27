/*var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        productImg:"https://ltheme.com/wp-content/uploads/2022/04/uncaught-referenceerror-is-not-defined.png"
    }
})*/
fetch('firstView.html')
    .then((response) => {
        if(response.ok) {
            console.log(response.text());
        }
        response.text().then((data)=>{

            $('.content').html(data);

        });
        //throw new Error('Network response was not ok');
    })
    .catch((error) => {
        console.log(error);
    });