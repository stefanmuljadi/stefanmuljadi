import Image from "next/image"

const flagemojiToPNG = (flag) => {
    return (<img className="h-full mb-2" src={`https://flagcdn.com/24x18/${flag}.png`} alt='flag' />)
}

const Education = () => {
    return (
        <>
        <div className="w-full text-black">
            <div className="px-12 lg:px-24 py-16 z-20 w-full bg-primary pb-24">
                <div className='text-4xl lg:text-6xl font-allenoire pb-8 text-white'>
                    My Education
                </div>
                <div className="flex flex-col gap-12 h-full ">
                    {/* Year */}
                    <div className="flex flex-col gap-8 text-black">
                        <div className='text-2xl lg:text-4xl font-allenoire '>

                            <div className="h-[0.1rem] w-12 bg-black mb-1 "></div>
                            <div className="flex flex-row items-center gap-4">
                                <div className="font-allenoire">Ludwig Maximillian University Munich</div>
                                {flagemojiToPNG("de")}
                            </div>
                            <div className="text-sm lg:text-lg font-bold font-allenoire">
                                April 2023 - August 2023
                            </div>
                            <ul className="list-disc color-primary font-semibold text-sm lg:text-base ml-8">
                                <li>Computer Science exchange student for summer semester 2023</li>
                            </ul>
                        </div>
                        <div className='text-2xl lg:text-4xl font-allenoire '>
                            <div className="h-[0.1rem] w-12 bg-black mb-1 "></div>
                            <div className="flex flex-row items-center gap-4">
                                <div className="font-allenoire">City University of Hong Kong</div>
                                {flagemojiToPNG("hk")}
                            </div>
                            <div className="text-sm lg:text-lg font-bold font-allenoire">
                                Sept 2021 - Expected May 2025
                            </div>
                            <ul className="list-disc color-primary font-semibold text-sm lg:text-base ml-8">
                                <li>Sophomore in Bachelor of Science in Computer Science</li>
                                <li>Recipient of full tuition scholarship of 140,000 HKD per annum</li>
                                <li>CGPA: 3.57, Dean's List awardee in 1st and 2nd semester</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education