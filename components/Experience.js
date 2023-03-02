import Image from "next/image"

const Experience = () => {
    return (
        <>
        <div className="w-full bg-black text-white">
            <div className="px-24 py-16 z-20 w-full bg-black">
                <div className=' text-6xl font-allenoire pb-8 text-primary'>
                    My Experience
                </div>
                <div className="flex flex-col gap-12 h-full">
                    {/* Year */}
                    <div className="flex flex-col gap-8">
                        <div className='text-4xl font-allenoire text-white'>
                            <div className="h-[0.1rem] w-12 bg-white mb-1"></div>
                            2022
                        </div>
                        {/* Company */}
                        <div className="w-full grid grid-cols-6">
                            <div className="col-span-2 text-3xl font-allenoire text-white">
                                Civtek, <br />Product Director
                            </div>
                            <div className="col-span-4">
                                <ul className="list-disc color-primary font-semibold">
                                    <li>Manages a team of 15 student software engineers from various universities to help NGOs around Hong Kong</li>
                                    <li>Proposed and consulted various technological solutions that best-suited partner NGOs</li>
                                    <li>Coordinated customized technological help to more than 4 NGOs from various fields</li>
                                    <li>Actively oversee and contribute to different projects' planning and development</li>
                                </ul>
                            </div>
                        </div>
                        {/* Company */}
                        <div className="w-full grid grid-cols-6">
                            <div className="col-span-2 text-3xl font-allenoire text-white">
                                uHey Limited, <br />Product Engineer Intern
                            </div>
                            <div className="col-span-4">
                                <ul className="list-disc color-primary font-semibold justify-between">
                                    <li>Architected project specifications, timelines, and documentation to create a technological solution to assist volunteers in assets field deployment</li>
                                    <li>Implemented a full-stack mobile application with React Native, Express.js, and MongoDB</li>
                                    <li>Collaborated with other interns to develop a single integrated backend service for various services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Year */}
                    <div className="flex flex-col gap-8">
                        <div className='text-4xl font-allenoire text-white'>
                            <div className="h-[0.1rem] w-20 bg-white mb-1"></div>
                            2021
                        </div>
                        {/* Company */}
                        <div className="w-full grid grid-cols-6">
                            <div className="col-span-2 text-3xl font-allenoire text-white">
                            Sycomora Welfare Center, <br/>Full Stack Developer
                            </div>
                            <div className="col-span-4">
                                <ul className="list-disc color-primary font-semibold">
                                    <li>Developed a full-stack web application for healthcare and wellness-related blogs using VueJS, MongoDB, and Strapi.js</li>
                                    <li>Deployed the application in Linux environment servers using various cloud hosting services</li>
                                </ul>
                            </div>
                        </div>
                        {/* Company */}
                        <div className="w-full grid grid-cols-6">
                            <div className="col-span-2 text-3xl font-allenoire text-white">
                            Techkyra, <br/>Full Stack Engineer
                            </div>
                            <div className="col-span-4">
                                <ul className="list-disc color-primary font-semibold justify-between">
                                    <li>Developed a website for the Indonesian Ministry of Health for easier and centralized COVID-19-related drug searching</li>
                                    <li>Enabled easier drug searching to more than 100.000 users all around Indonesia since its first launch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="mt-[-10rem]" width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,80 0,80 C 58.32879234167892,92.43298969072166 116.65758468335784,104.8659793814433 181,105 C 245.34241531664216,105.1340206185567 315.69845360824746,92.96907216494847 372,82 C 428.30154639175254,71.03092783505153 470.5486008836525,61.25773195876289 526,54 C 581.4513991163475,46.74226804123711 650.1071428571429,42 721,55 C 791.8928571428571,68 865.0228276877762,98.74226804123711 916,108 C 966.9771723122238,117.25773195876289 995.8015463917527,105.03092783505154 1046,96 C 1096.1984536082473,86.96907216494846 1167.7709867452133,81.1340206185567 1237,79 C 1306.2290132547867,76.8659793814433 1373.1145066273934,78.43298969072166 1440,80 C 1440,80 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#c55ffc" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,160 0,160 C 72.98527245949926,163.2192562592047 145.9705449189985,166.43851251840942 199,160 C 252.0294550810015,153.56148748159058 285.1030927835052,137.465206185567 338,132 C 390.8969072164948,126.534793814433 463.61708394698076,131.70066273932252 533,141 C 602.3829160530192,150.29933726067748 668.4285714285713,163.73214285714286 723,169 C 777.5714285714287,174.26785714285714 820.6686303387336,171.37076583210606 880,162 C 939.3313696612664,152.62923416789394 1014.8969072164946,136.784793814433 1087,134 C 1159.1030927835054,131.215206185567 1227.7437407952873,141.49005891016202 1286,148 C 1344.2562592047127,154.50994108983798 1392.1281296023562,157.254970544919 1440,160 C 1440,160 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#c55ffc" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,400 C 0,400 0,240 0,240 C 43.614506627393226,251.0988586156112 87.22901325478645,262.1977172312224 151,267 C 214.77098674521355,271.8022827687776 298.6984536082474,270.3079896907216 360,269 C 421.3015463917526,267.6920103092784 459.97717231222373,266.57032400589105 518,257 C 576.0228276877763,247.42967599410898 653.3928571428572,229.4107142857143 715,234 C 776.6071428571428,238.5892857142857 822.4513991163474,265.7868188512519 877,269 C 931.5486008836526,272.2131811487481 994.8015463917525,251.44201030927834 1057,239 C 1119.1984536082475,226.55798969072166 1180.3424153166422,222.44513991163475 1244,224 C 1307.6575846833578,225.55486008836525 1373.8287923416788,232.7774300441826 1440,240 C 1440,240 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#c55ffc" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,400 C 0,400 0,320 0,320 C 37.868004418262146,314.5357142857143 75.73600883652429,309.07142857142856 147,318 C 218.2639911634757,326.92857142857144 322.923969072165,350.25 389,344 C 455.076030927835,337.75 482.5681148748158,301.92857142857144 535,291 C 587.4318851251842,280.07142857142856 664.8035714285714,294.0357142857143 729,298 C 793.1964285714286,301.9642857142857 844.2175994108984,295.92857142857144 907,303 C 969.7824005891016,310.07142857142856 1044.326030927835,330.25000000000006 1108,341 C 1171.673969072165,351.74999999999994 1224.4782768777613,353.07142857142856 1278,348 C 1331.5217231222387,342.92857142857144 1385.7608615611193,331.4642857142857 1440,320 C 1440,320 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#c55ffc" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
        </div>
        </>
    )
}

export default Experience