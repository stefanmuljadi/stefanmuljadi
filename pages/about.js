const About = () => {
  const mySkills = [
    { name: 'React', image: '', description: ''},
    { name: 'MongoDB', image: '', description: ''},
    { name: 'Vue JS', image: '', description: ''},
    { name: 'React Native', image: '', description: ''},

  ]
  return (
    <div className="bg-black w-screen h-screen">
      <div className="py-32 px-32 flex flex-col items-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-12">
          <div className="font-semibold text-5xl">
            About Me
          </div>
          <img src="" className="row-span-2 bg-white" alt="" />
          <div className="text-gray-400 fontse">
            I'm currently a sophomore in CityU HK doing CS. I've always fascinated by technology since I was a child. Thus, solving problem with technologies has always been my passion and I'm planning to continue doing that for the rest of my life.
          </div>
        </div>
        <div className="bg-primary w-3/4 h-full text-black mt-24 p-5 rounded-3xl">
          <p className="text-3xl font-semibold">Skills</p>
          <div className="flex flex-row">
            {
              mySkills.map((skill) =>{
                return(
                  <div className="bg-black w-32 h-64">
                    jasdklfja;ldfkj
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;