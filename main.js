Vue.component('chuck-card', {
    props: ['texto', 'url'],
    template: 
    `
    <div class="col-sm">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" v-bind:src='url'>
        <div class="card-body">
            <p class="card-text">{{ texto }}</p> 
        </div>
    </div>
    </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        chuck: [ 
        { 
            icon_url: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
            value: 'Chuck Norris can skydive into outer space.'
        }, 
        { 
            icon_url: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
            value: 'The chief export of Chuck Norris is pain.'
        }, 
        { 
            icon_url: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
            value: 'Chuck Norris doesnt read books. He stares them down until he gets the information he wants.'
        }, 
        { 
            icon_url: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
            value: 'Time waits for no man. Unless that man is Chuck Norris.'
        }, 
        { 
            icon_url: 'https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg',
            value: 'If you spell Chuck Norris in Scrabble, you win. Forever.'
        }, 
        ], 
    }
})

