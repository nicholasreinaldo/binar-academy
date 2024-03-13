//  https://small-ear-9a7.notion.site/Comparison-and-Logical-Condition-e9326217f5464a72b3ab205b4ceaa1ef 

function scoreChecker(score, machineActive) {
  if (machineActive) {
  	if (score >= 0 && score <= 19) {
    	return "That was a terrible score — total fail!"
    }
    if (score >= 20 && score <= 39) {
    	return "You know some things, but it\'s a pretty bad score. Needs improvement."
    }
    
  	return "This is not possible, an error has occurred."
  }
  
  return "turn on machine"
}