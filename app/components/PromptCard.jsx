'use client';

import { useState } from 'react';

export default function PromptCard({ prompt, onClick }) {
    const [copied, setCopied] = useState(false);

    const categoryClass = `tag-${prompt.category}`;

    const handleCopy = async (e) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(prompt.prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <article
            onClick={() => onClick(prompt)}
            className="card p-5 cursor-pointer group"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <span className={`tag ${categoryClass}`}>
                    {prompt.category}
                </span>
                <span className="tool-badge">
                    {prompt.tool}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-warmGray-900 mb-2 group-hover:text-terracotta transition-colors">
                {prompt.title}
            </h3>

            {/* Preview text */}
            <p className="text-warmGray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                {prompt.prompt.substring(0, 120)}...
            </p>

            {/* Quality bar */}
            <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-warmGray-400 mb-1">
                    <span>Quality</span>
                    <span>{prompt.quality}/5</span>
                </div>
                <div className="quality-bar">
                    <div
                        className="quality-bar-fill"
                        style={{ width: `${(prompt.quality / 5) * 100}%` }}
                    />
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {prompt.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-warmGray-400 bg-warmGray-100 px-2 py-0.5 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-warmGray-100">
                <button
                    onClick={(e) => { e.stopPropagation(); onClick(prompt); }}
                    className="text-sm text-warmGray-500 hover:text-warmGray-900 transition-colors"
                >
                    View →
                </button>

                <button
                    onClick={handleCopy}
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                >
                    {copied ? (
                        <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied
                        </>
                    ) : (
                        <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                        </>
                    )}
                </button>
            </div>
        </article>
    );
}
