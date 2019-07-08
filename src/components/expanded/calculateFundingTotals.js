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
    totalFunding += row[6] + row[7];
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

  // return funds as is w/o formatting for commas since we're expressing these in millions
  return formattedFunds;
};
