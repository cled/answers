/**
 * Created by whitehawk on 2014-04-04.
 */
function eachRecursive(obj)
{
    for (var k in obj)
    {
        if (k === {} || k === null || k === '' || k === undefined || !k){
          console.log('ffff');
        }
        if (typeof obj[k] == "object" && k !== {}){
            console.log('k',obj[k])
            eachRecursive(obj[k]);
        }
        else
            console.log('z',k)
    }
}
