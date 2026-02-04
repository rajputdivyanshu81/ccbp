import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";

const mediaArticles = [
  {
    id: 1,
    title: "NxtWave recognized as Technology Pioneer by World Economic Forum",
    source: "Economic Times",
    date: "Jan 2024",
    excerpt:
      "NxtWave has been recognized as a Technology Pioneer for 2024 by the World Economic Forum...",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x200/007BFF/ffffff?text=WEF+Recognition",
  },
  {
    id: 2,
    title: "How NxtWave is Transforming Tech Education in India",
    source: "Forbes India",
    date: "Dec 2023",
    excerpt:
      "The Hyderabad-based edtech startup is making waves in the industry with its unique approach...",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x200/28A745/ffffff?text=Forbes+Feature",
  },
  {
    id: 3,
    title: "NxtWave Wins Best Tech Skilling EdTech Company Award",
    source: "Times Business Awards",
    date: "Nov 2023",
    excerpt:
      "NxtWave received the prestigious award for its contribution to tech skill development...",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x200/764ba2/ffffff?text=Times+Award",
  },
  {
    id: 4,
    title: "2000+ Companies Now Hiring from NxtWave Platform",
    source: "Business Standard",
    date: "Oct 2023",
    excerpt:
      "The placement numbers continue to grow as more companies recognize the quality of NxtWave graduates...",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x200/ff6b35/ffffff?text=Business+News",
  },
];

export default function MediaSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-700 mb-4">
            <Newspaper size={14} className="mr-1" />
            Media Coverage
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NxtWave in the Media
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what leading publications are saying about NxtWave
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mediaArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-32 bg-gradient-to-br from-[#007BFF]/20 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  <Newspaper className="w-12 h-12 text-white/50" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Source & Date */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#007BFF]">
                    {article.source}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar size={10} />
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#007BFF] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Button
                  variant="link"
                  className="p-0 h-auto text-[#007BFF] font-medium"
                  asChild
                >
                  <Link href={article.link} target="_blank">
                    Read Article
                    <ExternalLink size={12} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
