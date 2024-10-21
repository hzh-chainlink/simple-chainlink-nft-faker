const nftsMetadata = [
  {
    description: "This is your certification through Chainlink CCIP Bootcamp 2024, congratulations!",
    external_url: "https://testnets.opensea.io/", // <-- this can link to a page for the specific file too
    image: "https://ipfs.io/ipfs/QmWQDfLRtmpFiahihdUUefSVLSgZRMRa3CAipjBMK1XF9a?filename=chainlinkCcipBootcamp2024.gif",
    name: "Chainlink CCIP Certification",
    attributes: [
      {
        trait_type: "Event",
        value: "Chainlink CCIP Bootcamp",
      },
      {
        trait_type: "Year",
        value: "2024",
      },
      {
        trait_type: "FakerNumber",
        value: 1,
      },
    ],
  },
  {
    description: "This is your certification through Chainlink Tokenized RWA Bootcamp 2024, congratulations!",
    external_url: "https://testnets.opensea.io/", // <-- this can link to a page for the specific file too
    image:
      "https://ipfs.io/ipfs/QmZT95FgyvNM2Bb6CZtRSareUhCHfWmQJhKxuiGSLWwDYk?filename=chainlinkTokenizedRwaBootcamp2024.gif",
    name: "Chainlink Tokenized RWA Certification",
    attributes: [
      {
        trait_type: "Event",
        value: "Chainlink Tokenized RWA Bootcamp",
      },
      {
        trait_type: "Year",
        value: "2024",
      },
      {
        trait_type: "FakerNumber",
        value: 2,
      },
    ],
  },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
