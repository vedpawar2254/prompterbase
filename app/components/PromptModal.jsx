'use client';

import { useState, useEffect } from 'react';

export default function PromptModal({ prompt, onClose }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!prompt) return null;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt.prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const categoryClass = `tag-${prompt.category}`;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="modal-overlay" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-2xl modal-content">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-warmGray-100">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`tag ${categoryClass}`}>
                                    {prompt.category}
                                </span>
                                <span className="tool-badge">
                                    {prompt.tool}
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold text-warmGray-900">
                                {prompt.title}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-warmGray-400 hover:text-warmGray-600 hover:bg-warmGray-100 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-160px)]">
                    {/* Prompt content */}
                    <div className="mb-6">
                        <label className="text-xs font-medium text-warmGray-400 uppercase tracking-wide block mb-2">
                            Prompt
                        </label>
                        <div className="code-block">
                            {prompt.prompt}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                        <label className="text-xs font-medium text-warmGray-400 uppercase tracking-wide block mb-2">
                            Tags
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {prompt.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm text-warmGray-600 bg-warmGray-100 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quality */}
                    <div>
                        <label className="text-xs font-medium text-warmGray-400 uppercase tracking-wide block mb-2">
                            Quality Score
                        </label>
                        <div className="flex items-center gap-3">
                            <div className="quality-bar flex-1 max-w-xs">
                                <div
                                    className="quality-bar-fill"
                                    style={{ width: `${(prompt.quality / 5) * 100}%` }}
                                />
                            </div>
                            <span className="text-sm font-medium text-warmGray-600">{prompt.quality}/5</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-warmGray-50 px-6 py-4 border-t border-warmGray-100">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-warmGray-400">
                            By {prompt.author}
                        </span>
                        <button
                            onClick={handleCopy}
                            className={`btn-primary ${copied ? '!bg-green-600' : ''}`}
                        >
                            {copied ? (
                                <>
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy Prompt
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
