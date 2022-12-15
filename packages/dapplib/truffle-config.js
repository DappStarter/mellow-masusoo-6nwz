require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index repeat magic huge inflict kiwi slot gather'; 
let testAccounts = [
"0xe5f76913741be69dc824da4f3608496c53213da41be3a2e23a04e7ca04d8c491",
"0x63d6f2ed7100e79408a3e7c6510ee63db89b67f728d6f11ad7d953f042fb7725",
"0x50d987c205891c985c8394cf858fc5dac7ad8c51b3e6cd4948694bab9c535cc4",
"0x5c8d19792e9960eec3204328ea7f556fbe56c598c018c90a0cda4a378f7d22d4",
"0x37e83b5cd4f72d49c4fd2c8a788cb91ffd4842ff5a2979bdb4a494e68bda2a50",
"0x9373e17733f784f806c00ba8074d7e725e623531c1be35befb85ca009df03000",
"0x48e00e38ff390b49c4c2d4410f98cdd7b3846b4ecd045fb781acc33aa3f77576",
"0x31892297755c7a029536964affc1e994af18a8aebcf4fab23e3ab29c720da28c",
"0x5d3bb9f9a08bd5ce1ada90aec8c758dde3d8f8a53cbd492caa1799a803e29e25",
"0x2396dc8423ec26ca43809166ad9ba963e369cd7722a3a42808de9d8fc9e5d7bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

