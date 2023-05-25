//     var HDWalletProvider = require("truffle-hdwallet-provider");

//     var mnemonic = "risk elegant project puzzle glimpse farm sell panda weasel draw monitor powder";

    module.exports = {

       networks: {
/*          rinkeby: {
            provider: function() {
              return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/9cdcf3a0e5f44b7989f63f783aed69b7");
            },
            network_id: "*"
          },
*/
          development: {
               host: "localhost",
               port: 8545,
               network_id: "*" // Match any network id
          }   
        } 
};
