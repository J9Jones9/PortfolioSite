import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2023,
        title: 'Software Engineer Intern',
        duration: '3 Months',
        details:
            "Wrote code for app"

    },
    {
        year: 2020,
        title: 'IT Manager',
        duration: '2 Years',
        details:
            "Wrote code for app"

    },
    {
        year: 2022,
        title: 'Software Engineer Intern',
        duration: '3 Months',
        details:
            "Wrote code for app"

    },
    {
        year: 2023,
        title: 'Software Engineer',
        duration: '3 Months',
        details:
            "Wrote code for app"

    },
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md: pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <Workitem key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details} />
            ))}
        </div>
    )
}

export default Work