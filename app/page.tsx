import Link from "next/link"

export default function Home() {
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center h-screen overflow-hidden z-20">
        <video
          src="irene_dpreel_homepage_1080p.mp4"
          autoPlay loop muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        </video>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <Link
          href="/cinematography"
          className="border-2 border-white px-8 py-3 text-base text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          VIEW WORK
        </Link>
      </div>
    </div>

  )
}

/*
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1087396555?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full object-cover"
          aria-hidden="true"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href="/cinematography"
          className="border-2 border-white px-8 py-3 text-base text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          VIEW WORK
        </Link>
      </div>
    </div>
*/