import React, { FC } from "react";

interface ColourProps {
	palette: {
		colour: any[]
	}
}

const ColourPalette: FC<ColourProps> = ({palette}) => {
	
	let paletteAll = '';

	palette.colour.map(({name,dark,light})=>{
		console.log(name, dark);

		if (light) {
			const lightVal = `--theme-light-${name.toLowerCase()}:${light};`;
			paletteAll = paletteAll.concat(lightVal);
		}
		if (dark) {
			const darkVal = `--theme-dark-${name.toLowerCase()}:${dark};`;
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