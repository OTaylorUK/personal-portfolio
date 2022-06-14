
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { toPng } from 'html-to-image';

import React from 'react'
import { Keys, Boxes} from "../../Visualise";
import { useRouter } from "next/router";
import { useResizeDetector } from 'react-resize-detector';
import { formatNumberToLocal } from '../../../utils/globalFunc';
import { PortableButton, Default } from '../../PortableContent';
import { Header, Body, Container } from '../sectionLayout';

const BlockVisual = ({headerContent,textContent, buttons, componentContext}) => {

	let { moneyAmounts: initalMoney } = {...componentContext?.visualiseData}

	const router = useRouter()

	const resultsRef = useRef()

	const [containerWidth, setContainerWidth] = useState(null)
	const [boxes, setBoxes] = useState(null);
	const [keys, setKeys] = useState(null);
	const [contHeight, setContHeight] = useState(0);
	const [showLabels, setShowLabels] = useState(true);
	const [moneyAmounts, setMoneyAmounts] = useState(null)
	const [displayType, setDisplayType] = useState('y');
	const colourArray = useRef([
		{
			dark: '#8AE7DB',
			light: '#081B45',
		},
		{
			dark: '#64A8A9',
			light: '#54617D',
		},
		{
			dark: '#4B7F88',
			light: '#8790A3',
		},
		{
			dark: '#315566',
			light: '#B9BEC8',
		},
		{
			dark: '#182B45',
			light: '#ECEDEE',
		},
	]);


	const variableSelection = useMemo(
		() => ({
			amounts: moneyAmounts,
			displayType: displayType,
		 }),
		[moneyAmounts] //no dependencies so the value doesn't change
	  );

	
	// Use effects //
	/**
	 * on load / router change
	 */
	useEffect(() => {

		const filterRouterQueries = (query) => {

			const amounts = []
			const people = []


			Object.keys(query)
				.reduce((obj, key) => {
					
					let selectedAmount,person,uid;
					// always will exist
					if(key.toLowerCase().includes('comp')){
						uid = key.split('comp')?.[1]

						selectedAmount = formatNumberToLocal(router.query[key])
						selectedAmount['uid'] = uid; // add unique identifier for matching name (if set) to money amount

						amounts.push(selectedAmount)
					}
					
					// conditionally will exist
					if(key.toLowerCase().includes('person')){
						uid = key.split('person')?.[1]

						person = {
							name: router.query[key],
							uid: uid
						};
						people.push(person)

					}
			}, {});

			// combine names to value for displaying people from rich list e.g. person1 is linked to comp1
			if(people.length > 0 ){
				people.map((person)=>{

					amounts.map((amount)=>{
						if(amount?.uid === person?.uid){
							amount.displayValue = `${person?.name} (${amount.displayValue})`
						}
					})
				})
			}

			// sort array by asc size
			amounts.sort((a,b) => (a.actualValue > b.actualValue) ? 1 : ((b.actualValue > a.actualValue) ? -1 : 0))

			return amounts
		}

		/**
		 * sets the states for the lists and conditionally might add user selected choices if passed as a param in the url
		 */
		const getData = async () => {

			// original default values to use
			let moneyAmountsArr = JSON.parse(JSON.stringify(initalMoney));


			const amounts = filterRouterQueries(router.query)

			if(amounts.length > 0){
				moneyAmountsArr = amounts;
			}

			setMoneyAmounts(moneyAmountsArr)
			// setIsUpdating(true) // triggers comp reload with new data
		}

		// console.log('get data is called');
		getData()
	},[router.query, initalMoney ])

	
	/**
	 * on user selection change
	 * get priced items and rich list
	 * 
	 */
	useEffect(() => {
		const{amounts, displayType} = {...variableSelection}
		
		if(amounts === null  || colourArray === null || containerWidth === null){
			return null
		}

		const calculateSizes = (amount, base, i) => {

			let maxHeight,widthDiff,heightDiff;

			// calculate the new height/width of element 
			const baseInc = (amount?.actualValue / base?.value)



			const actualSize = (baseInc * base?.size)
			const currentBoxMaxWidth = base?.maxWidth * (i + 1)



			const findDifference = (val1, val2, toFixed = 0) =>{
				let dif = val1 - val2
				if(dif > 0){
					return Number(dif).toFixed(toFixed)
				}else{
					return 0
				}
			}

			let boxHeight = Number(base.size);
			let boxWidth = Number(base.size);
			let differenceToAdd;

			if(displayType === 'y'){
				// has max width
				boxWidth *= baseInc
				differenceToAdd = Number(findDifference(boxWidth, currentBoxMaxWidth))
				boxWidth = boxWidth - differenceToAdd
				boxHeight += differenceToAdd

				// makes the box nearer a square
				if(differenceToAdd === 0){
					let area = boxWidth * boxHeight
					let sqrt = Math.sqrt(area).toFixed(0)
					boxWidth =sqrt
					boxHeight = sqrt
				}
			}
			maxHeight = boxHeight;
			// // will scroll horizontally
			// if(displayType === 'x'){
			// 	// is bigger than the max height then add the difference to the width
			// 	if(actualSize > elHeight){
			// 		heightDiff = actualSize - elHeight
			// 		widthDiff = actualSize - boxWidth
			// 		boxHeight = elHeight // set to the max height possible
			// 		boxWidth = boxWidth + heightDiff
			// 	}

			// }
			// else{
			// 	// is bigger than the max width of current box then add the difference to the height
			// 	if(actualSize > currentBoxMaxWidth){
			// 		widthDiff = actualSize - currentBoxMaxWidth
			// 		heightDiff = actualSize - boxHeight
			// 		boxWidth = currentBoxMaxWidth // set to the max width possible
			// 		boxHeight = boxHeight + widthDiff
			// 	}
			// 	// else{
			// 	// 	boxHeight = base?.size
			// 	// }
			// 	maxHeight = boxHeight;
			// }

			return {
				width: boxWidth,
				height: boxHeight,
				newMaxHeight: maxHeight,
			}

		}

		const formatAmounts = () => {
			let keys = [], boxes = [], maxHeight, heightDiff, widthDiff, curIter = 0;

			const width = containerWidth;
			// const height = elHeight;
			
			const base = {
				size:  10, //px
				value: amounts?.[0]?.actualValue,
				maxWidth: width / amounts.length,
				// change the increment rate of the colours so that each box is visually distinct when possible 
				incrementBy: Math.floor(colourArray.current.length / amounts.length )
			}

		
			// loop over the set money amounts to create keys and update/add values
			amounts?.map((amount, i) => {

				// dynamically selected colour - depends on the number of values to show
				const selectedColourObj = colourArray.current[curIter];

				const {width, height, newMaxHeight} = calculateSizes(amount,base, i)
				maxHeight = newMaxHeight

				const displayBox = {
					id: `box-${i}`,
					height: height,
					width: width,
					colour: selectedColourObj,
					displayVal: amount.displayValue,
					zIndex: amounts.length - i
				}

				boxes.push(displayBox)

				const displayKey = {
					id: `box-${i}`,
					colour: selectedColourObj,
					displayVal: amount.displayValue,
				}
				

				const boxKey = {
					visual: <div className={`h-4 w-4 border `} style={{
						backgroundColor: `${selectedColourObj}`
					}} ></div>,
					displayVal: amount.displayValue,
				}
				keys.push(displayKey)

				curIter += base?.incrementBy
			})

			return {
				keys,
				boxes,
				maxHeight
			}
		}

		const {keys,boxes, maxHeight} = formatAmounts()

		setBoxes(boxes)
		setKeys(keys)
		if(displayType === 'y'){
			setContHeight(maxHeight)
		}
		
		
	},[variableSelection, containerWidth])
	

	// Triggered on resize - just update sizes of boxes
	const onResize = useCallback((width) => {
		// console.log('resized here', width);
		setContainerWidth(width)
	}, []);

	// dynamically update the width and height on resize
	const { width: elWidth, height: elHeight, ref: elementRef } = useResizeDetector({onResize});
	// const containerWidth = useRef(elWidth)



	const scrollToTop = () => {
		if (elementRef?.current) {
			elementRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })  
		}
	}

	// download button
	const downloadButtonClick = useCallback(() => {

		if (resultsRef.current === null) {
				return null
		}
			
		// if (questionRef.current === null) {
		// 	  return null
		// }

		// hide specific article section
		function filter(node) {
			return (node.tagName !== 'ARTICLE');
		}


	
		toPng(resultsRef.current, { cacheBust: true, filter: filter})
			.then((dataUrl) => {
				
				const link = document.createElement('a')
				link.download = `visualise-1billion.png`
				link.href = dataUrl
				
				link.click()
			})
			.catch((err) => {
			console.error(err)
			})
	}, [resultsRef])

	const buttonFunction = () => {
		downloadButtonClick()
	}
	const btnContent = {
		buttonFunction
	}

	const toggleContext = {
		showLabels,
		setShowLabels
	}



	
	return (
		<Container>
            <Header >
				<Default blocks={headerContent} />
			</Header>
            <Body >
				<Default blocks={textContent} />

				<div className="relative w-full h-full mb-20">
					<Keys keys={keys} type={'block'}  />

					{/* <Toggle context={toggleContext} /> */}
					
					<div className={` ${displayType === 'x'? 'h-[30vh]' : 'h-auto'}  w-full  relative`} ref={elementRef} 
					style={{
						height: `${contHeight}px`,
						scrollMarginTop: '200px'
					}}>
						<Boxes  data={boxes} context={{scrollToTop,showLabels}} />
					</div>
				</div>

				<div className="w-full h-full ">
					<article className="relative -top-10 wrap flex flex-row flex-wrap justify-center items-center gap-5">
						{buttons?.map((button, i) => {
							return (
								<PortableButton key={`btn-${i}`} content={button} context={btnContent}/>
							)
						})}
					</article>
				</div>
			</Body>
		</Container>
	)

}
 
export default BlockVisual;