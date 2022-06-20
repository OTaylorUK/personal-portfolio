import React, { FC } from "react";

interface ColourProps {
	palette: {
		colour: any[]
	}
}

const ColourPalette: FC<ColourProps> = ({palette}) => {
	
	let paletteAll = '';

	palette.colour.map(({name,dark,light})=>{

		const niceName = name.toLowerCase().replace(' ', '-')

		if (light) {
			const lightVal = `--theme-light-${niceName}:${light};`;
			paletteAll = paletteAll.concat(lightVal);
		}
		if (dark) {
			const darkVal = `--theme-dark-${niceName}:${dark};`;
			paletteAll = paletteAll.concat(darkVal);
		}

	})
	return (
		<style jsx global>{`
		:root{
			${paletteAll}
		}
	  `}</style>
	);
}
 
export default ColourPalette;