

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