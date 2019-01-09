function attachEvents() {
    const url = 'https://wildwildwest-ae245.firebaseio.com/.json';
    let obj = {
        name: 'test',
        money: '111',
        bullets:'12'
    }

    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(obj),
        success: function (response) {
            console.log(response);
        },error : function (err) {
            console.log(err);
        }
    });


}