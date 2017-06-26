function Game(){

    document.getElementById('results-table').style.visibility = "visible";
    document.getElementById('canvas-button').style.visibility = "visible";      
    document.getElementById('fundraise-button').style.visibility = "visible";
        
    document.getElementById('start-button').value = "Restart!";  
        
    this.end_turn = function(){
        this.polling_display = (values.polling/10) + "%";
        document.getElementById('polling-value').textContent = this.polling_display;
        this.money_display = "$" + (values.money);
        document.getElementById('funds-value').textContent = this.money_display;
        this.countdown_display = (values.countdown) + " Days Left";
        document.getElementById('days-remaining-value').textContent = this.countdown_display;
        if (values.money < values.advertising_cost){
            document.getElementById('advertise-button').style.visibility = "hidden";
            document.getElementById('message').textContent = message.insufficient_funds_message;
        } 
        if (values.money >= values.advertising_cost){
            document.getElementById('advertise-button').style.visibility = "visible";
            document.getElementById('message').textContent = message.sufficient_funds_message;
        }
        if (values.countdown < 1){
            document.getElementById('advertise-button').style.visibility = "hidden";  
            document.getElementById('canvas-button').style.visibility = "hidden";      
            document.getElementById('fundraise-button').style.visibility = "hidden";
        }
        if (values.countdown < 1){
            if (values.polling >= values.polling_threshold){
                document.getElementById('message').textContent = message.win_message;
            } else {
                document.getElementById('message').textContent = message.loss_message;
            };
        };
    };
        
    this.day_end = function(){
        values.countdown -= 1;
    };
    
    this.canvas = function(){
        values.polling += values.canvasing_polling_increment  + Math.round(Math.random() * 2 - 2);
        this.day_end();
        console.log('Polls = ' + values.polling);
        this.end_turn();
    };
      
    this.advertise = function(){
        values.polling += (values.advertising_polling_increment + Math.round(Math.random() * 10 - 5));
        values.money -= values.advertising_cost;
        this.day_end();
        this.end_turn();
    };
    
    this.fundraise = function(){
        values.money += values.fundraising_revenue + Math.round(Math.random() * 200 - 100);
        this.day_end();
        this.end_turn();
    };
    
    this.end_turn();

};