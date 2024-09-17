function  DoSum(name,...args)
{
    let sum=0;
    for(var i in args)
    {
      sum=sum+args[i];
    }
    console.log(name)
    console.log(sum)
    
}
DoSum("hi havascript",2,4,7)

function Perform(num,...args)
{
  for(var i=0;i<5;i++)
  {
    console.log("good");
      
  }
  
}
Perform("this is")
