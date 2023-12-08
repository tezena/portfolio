import React from 'react'
import Link from 'next/link';

const MoreButton = () => {
  return (
    <div>
      <button class="sm:text-lg font-normal before:ease border border-white relative  h-12  lg:w-48 overflow-hidden  text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-20 before:duration-700  hover:before:-translate-x-60">
        <Link
          relative="relative z-10"
          href="/About"
          class="px-6 rounded inline-flex items-center"
        >
          View More
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6 ml-2"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </button>
    </div>
  );
}

export default MoreButton
