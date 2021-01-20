var app = new Vue({
    el: '#root',
    data: {
        stock: ['홈', '현물', '선물', '테마', '귀금속', '국체'],
        news: ['홈', '국내뉴스', '해외뉴스', '종합뉴스'],
        community: ['홈', '국내커뮤니티', '해외커뮤니티', '종합커뮤니티'],
        value: ['홈', '현물', '선물', '테마', '귀금속', '국체'],
    },
    methods: {
        sideChangeStock(e) {
            e.preventDefault();
            this.value = this.stock;
            if(this.$refs.color.classList.toggle('active')==true){
                this.$refs.bg.style.background= "black";
                this.$refs.bg.style.opacity= "0.5";
                this.$refs.xxbutton.style.backgroundColor= "black";
                this.$refs.xxbutton.style.display= "block";
                
            } else {
                this.$refs.color.classList.toggle('active');
    

            }
            this.$refs.color.style.backgroundColor = "#009ae1";
        },
        sideChangeNews(e) {
            e.preventDefault();
            this.value = this.news;
            if(this.$refs.color.classList.toggle('active')==true){
                this.$refs.bg.style.background= "black";
                this.$refs.bg.style.opacity= "0.5";
                this.$refs.xxbutton.style.backgroundColor= "black";
                this.$refs.xxbutton.style.display= "block";
            } else {
                this.$refs.color.classList.toggle('active');
            }
            this.$refs.color.style.backgroundColor = "#5270de";
        },
        sideChangeCommu(e) {
            e.preventDefault();
            this.value = this.community;
            if(this.$refs.color.classList.toggle('active')==true){
                this.$refs.bg.style.background= "black";
                this.$refs.bg.style.opacity= "0.5";
                this.$refs.xxbutton.style.backgroundColor= "black";
                this.$refs.xxbutton.style.display= "block";
            } else {
                this.$refs.color.classList.toggle('active');
            } 
            this.$refs.color.style.backgroundColor = "#32bec9";
        },
        sideChangeClose(e){
            this.$refs.color.classList.toggle('active');
            this.$refs.bg.style.opacity= "1";
            this.$refs.bg.style.background = "linear-gradient(rgb(52 90 163),rgb(53 128 164)) fixed";
            this.$refs.xxbutton.style.display= "none";
        },
        togglemenu(e) {
            e.preventDefault();
            this.$refs.navigation.classList.toggle('active');
            this.$refs.background.classList.toggle('active');
        },

        st_info(e){
            e.preventDefault();
            this.$refs.table.style.visibility = "visible";
        }
        
    },
});

let ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, { 
    type: 'line',  
    data: { 
        labels: ['','월', '화', '수', '목', '금'], 
        datasets: [{    label: 
                            '주식 데이터', 
                        backgroundColor: 
                            'transparent', 
                        borderColor: 'white',
                        data: [0,85000, 87400, 85000, 84300, 60000],
                        fontColor:'white',
                    }] 
        },
    options: {
        legend : {
            display:true,
            labels : {
                fontColor: 'white',
                defaultFontColor:'#666',
            }
        },
        title : {
            display:true,
            text:'삼성전자',
            fontColor:'white',
            fontSize:'20',
        },
        scales: {
            xAxes: [{
                ticks:{
                    fontColor : 'white',
                    fontSize : 14
                },
            }],
            yAxes: [{
                ticks:{
                    min:0,
                    max: 100000,
                    fontColor : 'white',
                    fontSize : 14
                },
            }]
        }
    }  

});


function samsung() {
    document.getElementById('sgh_1').style.borderBottomStyle = "solid";
    document.getElementById('sgh_2').style.borderBottomStyle = "none";
    document.getElementById('sgh_3').style.borderBottomStyle = "none";
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, { 
        type: 'line',  
        data: { 
            labels: ['','월', '화', '수', '목', '금'], 
            datasets: [{    label: 
                                '주식 데이터', 
                            backgroundColor: 
                                'transparent', 
                            borderColor: 'white',
                            data: [0,85000, 87400, 85000, 84300, 60000],
                            fontColor:'white',
                        }] 
            },
        options: {
            legend : {
                display:true,
                labels : {
                    fontColor: 'white',
                    defaultFontColor:'#666',
                }
            },
            title : {
                display:true,
                text:'삼성전자',
                fontColor:'white',
                fontSize:'20',
            },
            scales: {
                xAxes: [{
                    ticks:{
    
                        fontColor : 'white',
                        fontSize : 14
                    },
                }],
                yAxes: [{
                    ticks:{
                        min:0,
                        max: 100000,
                        fontColor : 'white',
                        fontSize : 14
                    },
                }]
            }
        }  
    
    });
}

function LG() {
    let ctx2 = document.getElementById('myChart').getContext('2d');
    document.getElementById('sgh_1').style.borderBottomStyle = "none";
    document.getElementById('sgh_2').style.borderBottomStyle = "solid";
    document.getElementById('sgh_3').style.borderBottomStyle = "none";

let chart = new Chart(ctx2, { 
    type: 'line',  
    data: { 
        labels: ['','월', '화', '수', '목', '금'], 
        datasets: [{    label: 
                            '주식 데이터', 
                        backgroundColor: 
                            'transparent', 
                        borderColor: 'white',
                        data: [0,140000, 147000 , 138000, 135000, 130000],
                        fontColor:'white',
                    }] 
        },
    options: {
        legend : {
            display:true,
            labels : {
                fontColor: 'white',
                defaultFontColor:'#666',
            }
        },
        title : {
            display:true,
            text:'LG전자',
            fontColor:'white',
            fontSize:'20',
        },
        scales: {
            xAxes: [{
                ticks:{

                    fontColor : 'white',
                    fontSize : 14
                },
            }],
            yAxes: [{
                ticks:{
                    fontColor : 'white',
                    fontSize : 14
                },
            }]
        }
    }  

});
}

function Hyundai() {
    let ctx3 = document.getElementById('myChart').getContext('2d');
    document.getElementById('sgh_1').style.borderBottomStyle = "none";
    document.getElementById('sgh_2').style.borderBottomStyle = "none";
    document.getElementById('sgh_3').style.borderBottomStyle = "solid";
    let chart = new Chart(ctx3, { 
        type: 'line',  
        data: { 
            labels: ['','월', '화', '수', '목', '금'], 
            datasets: [{    label: 
                                '주식 데이터', 
                            backgroundColor: 
                                'transparent', 
                            borderColor: 'white',
                            data: [0,240000, 241000, 250500, 259000, 261000],
                            fontColor:'white',
                        }] 
            },
        options: {
            legend : {
                display:true,
                labels : {
                    fontColor: 'white',
                    defaultFontColor:'#666',
                }
            },
            title : {
                display:true,
                text:'현대자동차',
                fontColor:'white',
                fontSize:'20',
            },
            scales: {
                xAxes: [{
                    ticks:{
    
                        fontColor : 'white',
                        fontSize : 14
                    },
                }],
                yAxes: [{
                    ticks:{
                        fontColor : 'white',
                        fontSize : 14
                    },
                }]
            }
        }  
    
    });
    
}
$(function() {
     cnt0 = 0;
    counterFn();

    function counterFn() {
      id0 = setInterval(count0Fn, 10);

      function count0Fn() {
        cnt0=cnt0+800;
        if (cnt0 > 98800) {
          clearInterval(id0);
        } else {
          $(".number").text(cnt0);
        }
      }
      
    }
  });

