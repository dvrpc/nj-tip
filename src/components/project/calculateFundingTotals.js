export const getTotals = info => {
  let y1Funding,
    y2Funding,
    y3Funding,
    y4Funding,
    programYearsFunding,
    totalFunding;
  y1Funding = y2Funding = y3Funding = y4Funding = programYearsFunding = totalFunding = 0;

  info.forEach(row => {
    y1Funding += row[2];
    y2Funding += row[3];
    y3Funding += row[4];
    y4Funding += row[5];
    totalFunding += row[6];
  });

  programYearsFunding = y1Funding + y2Funding + y3Funding + y4Funding;
  totalFunding += programYearsFunding;

  const formattedFunds = [
    y1Funding,
    y2Funding,
    y3Funding,
    y4Funding,
    programYearsFunding,
    totalFunding
  ];

  // return funds as is w/o formatting for commas since we're expressing these in thousands
  return convertToCurrency(formattedFunds);
};

const convertToCurrency = jawns => {
  const test = 0;

  // check if browser supports the locales and options arguments of toLocaleString
  try {
    test.toLocaleString("en-US");
  } catch (e) {
    console.error("failed ", e);
    return e.name === "RangeError";
  }

  // add commas
  return jawns.map(fund =>
    fund > 0
      ? fund.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 3
        })
      : "$0"
  );
};
