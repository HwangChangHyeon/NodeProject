var app = new Vue({
    el: '#root',
    data: {
        stock : ['홈', '국내증시', '해외증시','시장지표'],
        news : ['홈','국내뉴스','해외뉴스','종합뉴스'],
        community : ['홈','국내커뮤니티', '해외커뮤니티','종합커뮤니티'],
        value : ['홈', '국내증시', '해외증시', '시장지표'],
    },
    methods: {
        sideChangeStock(e)  {
            e.preventDefault();
            this.value = this.stock;
            this.$refs.color.style.backgroundColor = "#009ae1";
        },
        sideChangeNews(e) {
            e.preventDefault();
            this.value = this.news;
            this.$refs.color.style.backgroundColor = "#5270de";
        },
        sideChangeCommu(e) {
            e.preventDefault();
            this.value = this.community;
            this.$refs.color.style.backgroundColor = "#32bec9";
        },
        togglemenu(e){
            e.preventDefault();
            this.$refs.navigation.classList.toggle('active');
            this.$refs.background.classList.toggle('active');
        },
    },
});



