'use script'
function createItem(item){
    return '<li>'+item+'</li>'

}

function createList(list)
{
    let arr = "";
      for(let i=0;i<list.length;i++)
  {
      arr += createItem(list[i])
       
  }
  return '<ul>'+ arr +'<ul>'
}