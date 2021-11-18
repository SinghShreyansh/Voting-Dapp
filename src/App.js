import './App.css';
import React,{ useState, useEffect} from "react"
import ElectionAbi from "./contracts/Election.json"
import Web3 from "web3"
import Navbar from "./Navbar.js"
import Body from "./Body"

function App() {

  useEffect( () => {
    loadweb3();
    LoadBlockchaindata();
  }, [])

  const [account,setAccount]=useState("")
  const [loader,setLoader]=useState(true)
  const [election,setElection]=useState()
  const [Candidate1,setCandidate1] = useState()
  const [Candidate2,setCandidate2] = useState()


  

  const loadweb3 = async ()=>{
     if(window.ethereum) {
        window.web3= new Web3(window.ethereum);
        await window.ethereum.enable();
     }else if(window.web3){
       window.web3 = new Web3(window.web3.currentProvider)
     } else{
       window.alert(
         "Non-Ethereum browser detected , you should consider trying Metamask"

       )
     }
  }

  const LoadBlockchaindata = async () =>{
    setLoader(true)
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setAccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = ElectionAbi.networks[networkId];

    if(networkData){
          const election = new web3.eth.Contract(ElectionAbi.abi,networkData.address)

          const candidate1= await election.methods.candidate(1).call()
        
          const candidate2= await election.methods.candidate(2).call()
          
          setCandidate1(candidate1);
          setCandidate2(candidate2);
         
          setElection(election)
         
          setLoader(false)
    } else{
      window.alert("Smart contract is not deployed to current network")
    }
  }

        const votecandidate = async (candidateid) =>{
          setLoader(true)
          await election.methods.Vote(candidateid).send({from : account}).on('transactionhash',()=>{
            console.log("successfully ran")
          })
          setLoader(false)
        };

    if(loader){
      <h1>Loading...</h1>
    }

  
    return (
      <div className="App">
        <Navbar account={account}/>
          <Body Candidate1={Candidate1} Candidate2={Candidate2}  votecandidate={votecandidate} account={account} />
          
      </div>
    );

}

export default App;
