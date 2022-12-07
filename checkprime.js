function checkPrime(num)
{
 for(lrt i=0 ; i<=num ; i++)
  {
   if(num%i)
   {
    return true;
   }
 }
 rteurn false;
}
checkPrime(13);