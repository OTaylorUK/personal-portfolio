

export const capitalizeString = (str: string) => {
    if (typeof str !== 'string' || !str) return str

    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const resolveVariation = (variation: string, SectionComponents: any) => {
	const Section = SectionComponents[capitalizeString(variation)]
  
	if (Section) {
	  return Section
	}
  
	console.error('Cant find section', capitalizeString(variation))
	return null
}

export const outputVariableString = (val:string | undefined | (string | undefined)[] ) => {
	let returnString: any = '';
	if(Array.isArray(val)){
		let retArr: any = []

		val.forEach(element => {
		let val = outputVariableString(element);
		if(val.length > 0 ){
			retArr = [...retArr, outputVariableString(element)]
		}
		});

		returnString += retArr.join(' ')
	}else if(typeof val !==  'undefined' && typeof val !==  null){
		returnString += val
	}

	return returnString
}

export const findAndReplaceHolder = (replaceVals: any, str:string ) => {
	var placeholders = str?.match(/\$(.*?)\$/g)
	if (placeholders) {
		let newString = '';

		placeholders?.map((placeholder, i) => {

		// text without placeholder characters
		var phText: string = placeholder.substring(1, placeholder.length - 1);

		// replacen with new value
		if (replaceVals[phText as unknown as number]) {
			if (newString !== '') {
			newString = newString.replace(placeholder, replaceVals[phText as unknown as number])
			
			} else {
			if (str) {
				newString = str?.replace(placeholder, replaceVals[phText as unknown as number])
			}
			
			}
		}
		})
		return newString;
	} else {
		return str;
	}

}