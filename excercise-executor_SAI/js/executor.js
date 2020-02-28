'use script'
function execute(operation, value1 , value2)
{
    if(typeof(operation) === 'string')
    {
        switch(operation)
        {
    case 'ADD':
         return value1 + value2
        break;
    case 'SUB':
        return value1 - value2
        break;
    case 'MUL':
        return value1 * value2
        break;
    case 'div':
         return value1/value2
         break;
    case 'chaloupe':
        return undefined
}
}
else if(typeof(operation)==='function')
{
     return value1/value2
}
else
{
    return undefined
}
}