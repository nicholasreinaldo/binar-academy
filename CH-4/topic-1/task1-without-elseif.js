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