import Image from 'next/image'

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-white/80 dark:bg-[#0A0E1A]/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                        src="/Vector.svg"
                        alt="Loading"
                        width={40}
                        height={40}
                        className="object-contain animate-pulse"
                        priority
                    />
                </div>
                <div className="w-24 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-900 dark:bg-white rounded-full animate-[loadBar_1s_ease-in-out_infinite]" />
                </div>
            </div>
        </div>
    )
}
