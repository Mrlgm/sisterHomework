let a = $('.wp-inner')[0].fullpage()
$('#next').on('click',function(e){
  e.preventDefault();
  a.moveNext(true)
})

$('ul').on('click',function(e){
  e.preventDefault()
  a.moveTo(parseInt(e.target.id),true)
})