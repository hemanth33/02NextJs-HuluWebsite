import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React from 'react'

const Thumbnail = ({ result }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image
        layout='responsive'
        src={`${baseUrl}${result.backdrop_path || result.poster_path}` || `${baseUrl}${result.poster_path}`}
        height={1080}
        width={1920}
        />

        <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
                {result.title || result.original_name}
            </h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100 capitalize'>
                {result.media_type && `${result.media_type} |`}{" "}
                {result.release_date && `${result.release_date} |`}{" "}
                <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
            </p>
        </div>
    </div>
  )
}

export default Thumbnail