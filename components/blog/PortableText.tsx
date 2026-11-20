import { PortableText as PortableTextReact, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold text-white mt-6 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-300 leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-pink-500 pl-6 italic text-gray-400 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="ml-6 list-disc space-y-2 text-gray-300 mb-5">{children}</ul>,
    number: ({ children }) => <ol className="ml-6 list-decimal space-y-2 text-gray-300 mb-5">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-pink-400 underline underline-offset-2 hover:text-orange-400 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="rounded-xl overflow-hidden my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={500}
            className="w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 text-center mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
  },
};

export default function PortableText({ value }: { value: any }) {
  return <PortableTextReact value={value} components={components} />;
}
