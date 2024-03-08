const calculateSupply = (currentAge,maxAge,dailyAmount) => {
    const supplyNeeded = 365*(maxAge-currentAge)*dailyAmount
    console.log(`You will need ${supplyNeeded} of snacks to last you until the ripe old age of ${maxAge}`)
}

calculateSupply(25,100,2)