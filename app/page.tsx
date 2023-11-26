"use client"
import { data } from './_data'
import {
  motion
} from 'framer-motion'
export default function Home() {
  return (
    <main className='w-[90%] mx-auto '>

      <div className='rounded-2xl my-8 min-h-[30vh] bg-sky-300'>

      </div>

      <section className='grid grid-cols-4 gap-4'>
        {
          data.fullBodyExercises.map((e, i) => <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: i*0.5, ease: "easeInOut" }} className="p-6 border-2 rounded-2xl relative border-red-300">
              <div className='top-0 absolute p-4 right-0'>
                <div className='bg-red-300 px-4 py-2  rounded-full'>
                  <p>Full Body </p>
                </div>
              </div>
              <img className='min-h-[150px]' />

              <p className='text-4xl my-4 font-bold'>{e.name}</p>
              <p className='text-xl'>{e.instructions}</p>
            </motion.div>
          </>)
        }
      </section>
    </main>
  )
}
