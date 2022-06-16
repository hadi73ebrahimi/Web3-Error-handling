# Handling web3 Errors
Hi. when you develop a web3 related website, handling and informing end users of what's going on is a essence. 


# Files

The only file you will need to import is Error.js.

 ### in vanilla js:
    <script type="text/javascript" src="Errors.js"></script>

## How to use

Pass error code to like this

    let errormsg =  Getweb3ErrorReason(transaction.code);
    console.log(errormsg);

