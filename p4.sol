pragma solidity ^0.5.0;
contract con
{
    uint stateVar1=10;
    
    function disp() public view returns (uint)
    {
	    return stateVar1 ;
    }
    function sum() public view returns (uint)
    {
	    uint a=10; //local variable
	    uint b=20; //local variable
        uint c;
        c=a+b;
        return c;
    }
}