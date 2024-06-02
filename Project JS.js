// A variable to hold NFT's
const NFTs=[];

/* this function will take some values as parameters, create an
   NFT object using the parameters passed to it for its metadata, 
   and store it in the variable above.*/
function mintNFT (group,member,position) 
{
   const NFTobj=
   {
      "group_name":group,
      "member_name":member,
      "member_position":position
   }
   NFTs.push(NFTobj);          
   console.log("Minted:",group);
}

// creates a "loop" that will go through an "array" of NFT's
// and print the metadata with console.log()
function listNFTs () 
{
   
   for(let n=0; n<NFTs.length; n++)
   {
      console.log("\nID:",n+1);
      let group=NFTs[n].group_name;
      let member=NFTs[n].member_name;
      let position=NFTs[n].member_position;
      console.log("Group:",group,",","Member:",member,",","position:",position);
   }
    
}

// prints the total number of NFTs we have minted to the console
function getTotalSupply() 
{
   console.log("\nTotal Supply",NFTs.length);
}

// calling functions 
mintNFT("BTS","Jeon Jungkook","Main Vocalist");
mintNFT("Seventeen","Kim Mingyu","Rapper");
mintNFT("GOT7","Jackson Wang","Lead Dancer and Main Vocalist");
mintNFT("EXO","Park Chanyeol","Visual and Sub Vocalist");

listNFTs();

getTotalSupply();