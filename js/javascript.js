window.onscroll = function(){ navFix() }

navFix = function(){
    var nav = document.getElementsByTagName('nav')[0];
    var banner = document.getElementById('banner');

    var scrollY = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
    var bannerHeight = banner.offsetHeight;

    var distanceFromTop = bannerHeight - scrollY;

    if(distanceFromTop < 20){
        nav.style.top = ((0 - distanceFromTop) - 1000) + 'px';
        if(!nav.classList.contains('fixedHeader'))
            nav.classList.add('fixedHeader')
    } else {
        nav.classList.remove('fixedHeader')
    }
}

search = function(){
    var searchText = document.getElementById('search').value.toLowerCase();
    var questions = document.getElementsByClassName('question');

    for(var i = 0; i < questions.length; i++){
        var question = questions[i];
        var questionText = question
            .getElementsByClassName('questionText')[0]
            .innerHTML.toLowerCase();
        var questionAnswer = question
            .getElementsByClassName('questionAnswer')[0]
            .innerHTML.toLowerCase();

        question.style.display = '';
        if(!questionText.includes(searchText) && !questionAnswer.includes(searchText)){
            question.style.display = 'none';
        }
    }
}
