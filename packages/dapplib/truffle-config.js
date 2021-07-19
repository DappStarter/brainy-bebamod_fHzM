require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name raise night equip hope kite army genre'; 
let testAccounts = [
"0x59305fb9a4b436c2f688061f2c9bfaff267e7b3b833240b6047be45129e3daef",
"0xfa5ce9e3ca0a5e67233e105a7bdb71ec3cf6fb96ed4ad82f4fdaeaf6fc80e830",
"0x40f9bc25c82d3412c2727e9f6f82165ed8f909d174192bb1784c57b21e1c5fe5",
"0xf8555cee588e6d0017958bbe06b3f59e767785ddb03dbe5bcdf6e7900e08e83f",
"0x9f399ecd4c7ed4fb43029a9725f74ef3e88330a268986f86dd963f50880f12c3",
"0xdd9edb773d32263f9b3d66c8f4b5e954dc4cd83a7ec62fa0294a0c8ac1f7b203",
"0x2b5f61f0bd4284038d530b4dffdfb76443ccf1b5ecad20ee4d970cd9da2e9123",
"0x4429960a3bbc380c6c172dbf0e0646c18bf65e0b47ec60f01a3951433bc94455",
"0x42a7f4c2237161d79881aedfad2db459d9d4efb1a6f8cf7509b8812978668086",
"0xe4ec93e331a66ecc64ecf91798aa84ec40b130d8c7c273f7d02dad6a6bf8da3f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


