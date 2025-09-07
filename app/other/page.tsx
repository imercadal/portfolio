import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    title: "Photography",
    description: "Personal and commissioned photography projects",
    image: "/placeholder.svg?height=400&width=600",
    slug: "photography",
  },
  {
    id: 2,
    title: "Visual Art",
    description: "Experimental visual art and installations",
    image: "/placeholder.svg?height=400&width=600",
    slug: "visual-art",
  },
  {
    id: 3,
    title: "Collaborations",
    description: "Special projects and collaborations with other artists",
    image: "/placeholder.svg?height=400&width=600",
    slug: "collaborations",
  },
]

export default function Other() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-light mb-12 tracking-tight">OTHER WORK</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link href={`/other/${category.slug}`} key={category.id} className="block group">
            <div className="relative aspect-[3/2] mb-4 overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl font-light group-hover:text-orange-500 transition-colors">{category.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
