import Image from 'next/image'

export default function Cat({path}) {
    return (
        <div class='m-6 relative w-48 h-48 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
            <Image 
            objectFit='cover'
            src={path}
            alt='Picture of Cat1'
            layout='fill'
            priority
            unoptimized={true}
            />
        </div>
    )
}