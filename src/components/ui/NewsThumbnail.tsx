import React from 'react';
import Image from 'next/image';
import { NewsItem } from '@/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Newspaper } from 'lucide-react';

// Fallback panel colour per news category (brand palette only).
const categoryColors: Record<string, string> = {
  'Corporate Update': 'bg-[#0B1F2A]',
  'Lithium & Royalty': 'bg-[#1F6F78]',
  'Investor Relations': 'bg-[#16364A]',
  'Corporate Governance': 'bg-[#5B6B73]',
};

interface NewsThumbnailProps {
  article: NewsItem;
  sizes: string;
  className?: string;
}

/** 16:9 thumbnail; uses article.image when present, otherwise a category-coloured panel. */
export const NewsThumbnail: React.FC<NewsThumbnailProps> = ({ article, sizes, className }) => {
  return (
    <div
      className={cn(
        'relative w-full aspect-video overflow-hidden',
        categoryColors[article.category] ?? 'bg-[#1F6F78]',
        className
      )}
    >
      {article.image ? (
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes={sizes}
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end p-5" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <Newspaper className="relative w-7 h-7 text-white/70 mb-2" />
          <span className="relative eyebrow text-white/90 text-xs">{article.category}</span>
        </div>
      )}

      {!article.verified && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="unverified" title="Not yet confirmed against the official release">
            Unverified
          </Badge>
        </div>
      )}
    </div>
  );
};
