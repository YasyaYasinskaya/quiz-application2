const username=$('#username');
const saveScoreBtn=$('#saveScoreBtn');

const mostRecentScore=localStorage.getItem('mostRecentScore');
$('#finalScore').text(mostRecentScore);

username.keyup(function (){
    saveScoreBtn.attr('disabled', !username.val());
});

saveScoreBtn.click(function(){
    console.log('Save score operation');
})




