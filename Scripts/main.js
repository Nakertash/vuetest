
function LoadLayout(name)
{
    var promise = new Promise(function(resolve, reject) {
        fetch(name+'.html')
            .then((response) => {
                if(response.ok) {
                    return response.text();
                }
                reject();
                //throw new Error('Network response was not ok');
            })
            .then((data)=>{
                $('.content').html(data);
                resolve();
            })
            .catch((error) => {
                console.log(error);
            });
    })
    return promise;
}
LoadLayout("MainMenu").then(()=>{
    $("#title").text("Haha classic");
    $("#icon").src="Icon.png";
});